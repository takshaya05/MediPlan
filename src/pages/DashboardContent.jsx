import { useState, useRef } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Layers,
  LayoutGrid,
  Loader2,
  BarChart3,
  FileText,
  Image,
  Hospital,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const COLORS = ["#004955", "#105E60", "#14365C", "#6B7D7F"];

const workflow = [
  {
    title: "Hospital Requirements",
    icon: Hospital,
  },
  {
    title: "CNN Spatial Model",
    icon: Brain,
  },
  {
    title: "Graphormer Model",
    icon: Layers,
  },
  {
    title: "GAN Floor Generator",
    icon: LayoutGrid,
  },
  {
    title: "Floor Plan Visualization",
    icon: Image,
  },
  {
    title: "Floor Plan Analytics",
    icon: BarChart3,
  },
  {
    title: "Layout Export",
    icon: FileText,
  },
];

const floorPlans = {
  "General Hospital": "/floorplans/general.png",
  "Single-Specialty Hospital": "/floorplans/single.png",
  "Multi-Speciality Hospital": "/floorplans/multi_speciality.png",
  "Rehabilitation Hospital": "/floorplans/rehabilitation.png",
  "Children Hospital": "/floorplans/childrens.png",
};

function DashboardContent() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);

  const [hospital, setHospital] = useState({
    type: "",
    area: "",
    departments: "",
    departmentType: "",
  });

  const [generated, setGenerated] = useState(false);

  const exportRef = useRef(null);

  const validateInput = () => {
    if (
      !hospital.type ||
      !hospital.area ||
      !hospital.departments ||
      !hospital.departmentType
    ) {
      alert("Fill all required fields");
      return;
    }

    setGenerated(false);
    setStep(1);
  };

  const runModel = () => {
    if (running) return;

    setRunning(true);

    setTimeout(() => {
      setRunning(false);

      setStep((prev) => {
        const nextStep = prev + 1;

        if (nextStep === 4) {
          setGenerated(true);
        }

        return nextStep;
      });
    }, 2500);
  };

  const goBack = () => {
    if (running) return;

    setStep((prev) => Math.max(prev - 1, 0));
  };

  const goNext = () => {
    if (running) return;

    setStep((prev) => Math.min(prev + 1, 6));
  };

  const downloadPNG = async () => {
    if (!exportRef.current) return;

    const canvas = await html2canvas(exportRef.current, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#10284E",
    });

    const link = document.createElement("a");

    link.download = "mediplan-floorplan.png";
    link.href = canvas.toDataURL("image/png");

    link.click();
  };

  const downloadPDF = async () => {
    if (!exportRef.current) return;

    const canvas = await html2canvas(exportRef.current, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#10284E",
    });

    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const width = 190;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(img, "PNG", 10, 10, width, height);

    pdf.save("mediplan-floorplan.pdf");
  };

  return (
    <div className="dashboard-engine">
      <div className="engine-header">
        <div>
          <h1>MediPlan AI Engine</h1>
          <p>AI Hospital Floor Planning Pipeline</p>
        </div>

        <div className="engine-progress">
          Step {step + 1} of {workflow.length}
        </div>
      </div>

      <div className="engine-layout">
        <aside className="workflow-panel">
          <div className="workflow-header">
            <span>Planning Workflow</span>
            <small>{step + 1}/7</small>
          </div>

          <div className="workflow-list">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              const completed = index < step;
              const active = index === step;

              return (
                <div
                  key={item.title}
                  className={`workflow-item ${
                    active ? "workflow-active" : ""
                  } ${completed ? "workflow-completed" : ""}`}
                >
                  <div className="workflow-icon">
                    <Icon size={15} />
                  </div>

                  <div className="workflow-text">
                    <span>{item.title}</span>

                    {completed && <small>Completed</small>}

                    {active && <small>Current Step</small>}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        <section className="engine-main">
          <div className="engine-card" ref={exportRef}>
            {step === 0 && (
              <HospitalRequirements
                hospital={hospital}
                setHospital={setHospital}
                validateInput={validateInput}
              />
            )}

            {step === 1 && (
              <ModelCard
                title="CNN Spatial Prediction Model"
                icon={<Brain size={22} />}
                desc="CNN predicts room size, location and spatial distribution."
                running={running}
                next={runModel}
              />
            )}

            {step === 2 && (
              <ModelCard
                title="Graphormer Relationship Model"
                icon={<Layers size={22} />}
                desc="Graphormer analyzes department connectivity and movement flow."
                running={running}
                next={runModel}
              />
            )}

            {step === 3 && (
              <ModelCard
                title="GAN Floor Plan Generator"
                icon={<LayoutGrid size={22} />}
                desc="GAN generates optimized hospital floor layouts."
                running={running}
                next={runModel}
              />
            )}

            {step === 4 && (
              <FloorPlanVisualization
                hospital={hospital}
                generated={generated}
                next={goNext}
              />
            )}

            {step === 5 && (
              <Analytics
                hospital={hospital}
                next={goNext}
              />
            )}

            {step === 6 && (
              <Export
                downloadPNG={downloadPNG}
                downloadPDF={downloadPDF}
              />
            )}
          </div>

          {step > 0 && step < 6 && !running && (
            <div className="navigation-row">
              <button
                type="button"
                onClick={goBack}
                className="navigation-button back-button"
              >
                <ArrowLeft size={15} />
                Back
              </button>

              <button
                type="button"
                onClick={goNext}
                className="navigation-button next-button"
              >
                Next
                <ArrowRight size={15} />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function HospitalRequirements({
  hospital,
  setHospital,
  validateInput,
}) {
  const updateHospital = (field, value) => {
    setHospital((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div>
      <div className="engine-section-heading">
        <div className="section-icon">
          <Hospital size={22} />
        </div>

        <div>
          <h2>Hospital Requirements</h2>
          <p>Enter hospital planning requirements</p>
        </div>
      </div>

      <div className="requirement-grid">
        <select
          value={hospital.type}
          onChange={(e) => updateHospital("type", e.target.value)}
        >
          <option value="">Select Hospital Type</option>

          {Object.keys(floorPlans).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={hospital.area}
          onChange={(e) => updateHospital("area", e.target.value)}
        >
          <option value="">Select Bed Size - Area</option>

          <option value="5000-7000">
            10 Beds - 5000 to 7000 sq.ft
          </option>

          <option value="10000-14000">
            20 Beds - 10000 to 14000 sq.ft
          </option>

          <option value="15000-20000">
            30 Beds - 15000 to 20000 sq.ft
          </option>

          <option value="25000-35000">
            50 Beds - 25000 to 35000 sq.ft
          </option>

          <option value="65000-120000+">
            100 Beds - 65000 to 120000+ sq.ft
          </option>
        </select>

        <select
          value={hospital.departments}
          onChange={(e) =>
            updateHospital("departments", e.target.value)
          }
        >
          <option value="">Number of Departments</option>

          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <select
          value={hospital.departmentType}
          onChange={(e) =>
            updateHospital("departmentType", e.target.value)
          }
        >
          <option value="">Select Department Type</option>

          <option value="Clinical & Medical Department">
            Clinical & Medical Department
          </option>

          <option value="Emergency & Intensive Care">
            Emergency & Intensive Care
          </option>

          <option value="Diagnostic & Support Department">
            Diagnostic & Support Department
          </option>
        </select>
      </div>

      <button
        type="button"
        onClick={validateInput}
        className="primary-engine-button"
      >
        Start AI Planning
        <ArrowRight size={15} />
      </button>
    </div>
  );
}

function ModelCard({
  title,
  icon,
  desc,
  running,
  next,
}) {
  return (
    <div className="model-card">
      <div className="model-heading">
        <div className="model-icon">{icon}</div>

        <div>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>

      <div className="model-info">
        <span>AI PROCESSING MODULE</span>

        <p>
          This stage analyzes the hospital requirements and prepares
          data for the next intelligent planning stage.
        </p>
      </div>

      {running && (
        <div className="model-running">
          <Loader2 size={18} className="animate-spin" />
          Running AI Model...
        </div>
      )}

      {!running && (
        <button
          type="button"
          onClick={next}
          className="primary-engine-button"
        >
          Run Model
          <ArrowRight size={15} />
        </button>
      )}
    </div>
  );
}

function FloorPlanVisualization({
  hospital,
  generated,
  next,
}) {
  return (
    <div>
      <div className="engine-section-heading">
        <div className="section-icon">
          <Image size={22} />
        </div>

        <div>
          <h2>Generated Floor Plan</h2>
          <p>AI-generated hospital layout visualization</p>
        </div>
      </div>

      {generated && (
        <div className="success-message">
          Floor Plan Generated Successfully
        </div>
      )}

      <div className="floorplan-grid">
        <div className="floorplan-image-card">
          <img
            src={floorPlans[hospital.type]}
            alt="Generated hospital floor plan"
            crossOrigin="anonymous"
            onError={(e) => {
              e.target.src = "/floorplans/default.png";
            }}
          />
        </div>

        <div className="summary-card">
          <h3>AI Requirements Summary</h3>

          <div className="summary-item">
            <span>Hospital Type</span>
            <strong>{hospital.type}</strong>
          </div>

          <div className="summary-item">
            <span>Bed Size / Area</span>
            <strong>{hospital.area} sq.ft</strong>
          </div>

          <div className="summary-item">
            <span>Departments</span>
            <strong>{hospital.departments}</strong>
          </div>

          <div className="summary-item">
            <span>Department Category</span>
            <strong>{hospital.departmentType}</strong>
          </div>

          <p className="summary-description">
            The AI layout places emergency zones near entry points,
            critical care units close to surgery areas, and improves
            patient and staff movement.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={next}
        className="primary-engine-button"
      >
        Continue To Analytics
        <ArrowRight size={15} />
      </button>
    </div>
  );
}

function Analytics({
  hospital,
  next,
}) {
  const [analyticsData] = useState(() => ({
    "General Hospital": {
      department: [
        {
          name: "Emergency",
          value: 92 + Math.floor(Math.random() * 6),
        },
        {
          name: "ICU",
          value: 84 + Math.floor(Math.random() * 8),
        },
        {
          name: "OPD",
          value: 89 + Math.floor(Math.random() * 7),
        },
        {
          name: "Support",
          value: 81 + Math.floor(Math.random() * 8),
        },
      ],
      space: [
        {
          name: "Patient",
          value: 48 + Math.floor(Math.random() * 6),
        },
        {
          name: "Medical",
          value: 30 + Math.floor(Math.random() * 6),
        },
        {
          name: "Staff",
          value: 15 + Math.floor(Math.random() * 5),
        },
        {
          name: "Utility",
          value: 5 + Math.floor(Math.random() * 3),
        },
      ],
    },

    "Single-Specialty Hospital": {
      department: [
        {
          name: "Treatment",
          value: 95 + Math.floor(Math.random() * 5),
        },
        {
          name: "Diagnostics",
          value: 88 + Math.floor(Math.random() * 6),
        },
        {
          name: "Recovery",
          value: 86 + Math.floor(Math.random() * 6),
        },
        {
          name: "Support",
          value: 82 + Math.floor(Math.random() * 7),
        },
      ],
      space: [
        {
          name: "Clinical",
          value: 56 + Math.floor(Math.random() * 5),
        },
        {
          name: "Patient",
          value: 24 + Math.floor(Math.random() * 5),
        },
        {
          name: "Staff",
          value: 15 + Math.floor(Math.random() * 4),
        },
        {
          name: "Utility",
          value: 5 + Math.floor(Math.random() * 3),
        },
      ],
    },

    "Multi-Speciality Hospital": {
      department: [
        {
          name: "Cardiology",
          value: 91 + Math.floor(Math.random() * 5),
        },
        {
          name: "Neurology",
          value: 88 + Math.floor(Math.random() * 6),
        },
        {
          name: "Surgery",
          value: 90 + Math.floor(Math.random() * 5),
        },
        {
          name: "Support",
          value: 84 + Math.floor(Math.random() * 6),
        },
      ],
      space: [
        {
          name: "Patient",
          value: 45 + Math.floor(Math.random() * 6),
        },
        {
          name: "Clinical",
          value: 36 + Math.floor(Math.random() * 5),
        },
        {
          name: "Staff",
          value: 14 + Math.floor(Math.random() * 4),
        },
        {
          name: "Utility",
          value: 5 + Math.floor(Math.random() * 2),
        },
      ],
    },

    "Rehabilitation Hospital": {
      department: [
        {
          name: "Therapy",
          value: 94 + Math.floor(Math.random() * 5),
        },
        {
          name: "Recovery",
          value: 91 + Math.floor(Math.random() * 5),
        },
        {
          name: "Support",
          value: 84 + Math.floor(Math.random() * 6),
        },
        {
          name: "Recreation",
          value: 82 + Math.floor(Math.random() * 6),
        },
      ],
      space: [
        {
          name: "Therapy",
          value: 44 + Math.floor(Math.random() * 5),
        },
        {
          name: "Patient",
          value: 36 + Math.floor(Math.random() * 5),
        },
        {
          name: "Staff",
          value: 15 + Math.floor(Math.random() * 4),
        },
        {
          name: "Utility",
          value: 5 + Math.floor(Math.random() * 3),
        },
      ],
    },

    "Children Hospital": {
      department: [
        {
          name: "Pediatrics",
          value: 95 + Math.floor(Math.random() * 4),
        },
        {
          name: "NICU",
          value: 91 + Math.floor(Math.random() * 4),
        },
        {
          name: "Play Zone",
          value: 85 + Math.floor(Math.random() * 6),
        },
        {
          name: "Support",
          value: 83 + Math.floor(Math.random() * 6),
        },
      ],
      space: [
        {
          name: "Children Care",
          value: 46 + Math.floor(Math.random() * 5),
        },
        {
          name: "Patient",
          value: 34 + Math.floor(Math.random() * 5),
        },
        {
          name: "Staff",
          value: 15 + Math.floor(Math.random() * 4),
        },
        {
          name: "Utility",
          value: 5 + Math.floor(Math.random() * 2),
        },
      ],
    },
  }));

  const {
    department = [],
    space = [],
  } = analyticsData[hospital.type] || {};

  return (
    <div>
      <div className="engine-section-heading">
        <div className="section-icon">
          <BarChart3 size={22} />
        </div>

        <div>
          <h2>Floor Plan Analytics</h2>
          <p>AI-based layout efficiency and space analysis</p>
        </div>
      </div>

      <div className="analytics-summary">
        <div>
          <span>Hospital Type</span>
          <strong>{hospital.type}</strong>
        </div>

        <div>
          <span>Area</span>
          <strong>{hospital.area} sq.ft</strong>
        </div>

        <div>
          <span>Departments</span>
          <strong>{hospital.departments}</strong>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="chart-card">
          <h3>Department Efficiency</h3>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={department}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="value"
                fill="#38bdf8"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Space Utilization</h3>

          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={space}
                dataKey="value"
                outerRadius={90}
                innerRadius={45}
              >
                {space.map((item, index) => (
                  <Cell
                    key={item.name}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="chart-legend">
            {space.map((item, index) => (
              <div key={item.name}>
                <span
                  style={{
                    backgroundColor: COLORS[index],
                  }}
                />

                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={next}
        className="primary-engine-button"
      >
        Export Layout
        <ArrowRight size={15} />
      </button>
    </div>
  );
}

function Export({
  downloadPNG,
  downloadPDF,
}) {
  return (
    <div>
      <div className="engine-section-heading">
        <div className="section-icon">
          <FileText size={22} />
        </div>

        <div>
          <h2>Layout Export</h2>
          <p>Download the generated hospital floor plan</p>
        </div>
      </div>

      <div className="export-options">
        <div className="export-card">
          <Image size={25} />

          <h3>PNG Image</h3>

          <p>
            Export the complete floor planning result as a
            high-resolution image.
          </p>

          <button
            type="button"
            onClick={downloadPNG}
            className="primary-engine-button"
          >
            <Image size={15} />
            Download PNG
          </button>
        </div>

        <div className="export-card">
          <FileText size={25} />

          <h3>PDF Document</h3>

          <p>
            Export the generated floor plan and analysis as a PDF
            document.
          </p>

          <button
            type="button"
            onClick={downloadPDF}
            className="primary-engine-button"
          >
            <FileText size={15} />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;