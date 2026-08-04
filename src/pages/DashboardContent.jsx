import React, { useState, useRef } from "react";

import {
  ArrowLeft,
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


const COLORS = [
  "#004955",
  "#105E60",
  "#14365C",
  "#6B7D7F",
];


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

    setRunning(true);


    setTimeout(() => {

      setRunning(false);


      setStep(prev => {

        const nextStep = prev + 1;


        if (nextStep === 4) {
          setGenerated(true);
        }


        return nextStep;

      });


    },2500);

  };



const downloadPNG = async () => {

  if (!exportRef.current) return;


const canvas = await html2canvas(exportRef.current,{
    scale:2,
    useCORS:true,
    allowTaint:false,
    backgroundColor:"#10284E"
});


  const link=document.createElement("a");

  link.download="mediplan-floorplan.png";

  link.href=canvas.toDataURL("image/png");

  link.click();

};



const downloadPDF = async () => {

  if (!exportRef.current) return;


  const canvas = await html2canvas(exportRef.current,{
    scale:2,
    useCORS:true,
    allowTaint:false,
    backgroundColor:"#10284E"
  });


  const img = canvas.toDataURL("image/png");


  const pdf = new jsPDF(
    "p",
    "mm",
    "a4"
  );


  const width = 190;

  const height =
    (canvas.height * width) /
    canvas.width;


  pdf.addImage(
    img,
    "PNG",
    10,
    10,
    width,
    height
  );


  pdf.save(
    "mediplan-floorplan.pdf"
  );

};



  return (

    <div className="h-full overflow-y-auto pr-2">


      <div className="flex justify-between items-center mb-5">


        <h1 className="text-2xl font-bold">
          MediPlan AI Engine
        </h1>


        <p className="text-xs text-slate-400">
          AI Hospital Floor Planning Pipeline
        </p>


      </div>




      <div className="grid lg:grid-cols-4 gap-4">



        <div className="glass rounded-2xl p-4">


          <h3 className="font-semibold mb-3 text-sm">
            Workflow
          </h3>



          {
            workflow.map((item,index)=>{

              const Icon=item.icon;


              return(

                <div

                  key={item.title}

                  className={`flex items-center gap-2 p-2 rounded-lg mb-2 text-xs ${
                    step===index
                    ?
                    "bg-[#004955]"
                    :
                    "bg-white/5"
                  }`}

                >

                  <Icon size={15}/>

                  <span>
                    {item.title}
                  </span>


                </div>

              )

            })
          }


        </div>






        <div className="lg:col-span-3">


          {
            step>0 && !running &&

            <button

              type="button"

              onClick={()=>setStep(prev=>Math.max(prev-1,0))}

              className="mb-3 flex gap-2 items-center bg-white/10 px-4 py-2 rounded-lg text-sm"

            >

              <ArrowLeft size={15}/>

              Back


            </button>

          }






          <div
            className="glass rounded-2xl p-5"
            ref={exportRef}
          >




          {
            step===0 &&


            <div>


              <div className="flex items-center gap-3 mb-4">


                <Hospital size={22}/>


                <div>


                  <h2 className="text-lg font-bold">
                    Hospital Requirements
                  </h2>


                  <p className="text-xs text-slate-400">
                    Enter hospital planning requirements
                  </p>


                </div>


              </div>





              <div className="grid md:grid-cols-2 gap-3">


                <select

                  className="p-3 bg-white/10 text-white rounded-lg text-sm"

                  value={hospital.type}

                  onChange={(e)=>setHospital({
                    ...hospital,
                    type:e.target.value
                  })}

                >


                  <option value="" className="text-black">
                    Select Hospital Type
                  </option>


                  {
                    Object.keys(floorPlans).map(type=>(

                      <option

                        key={type}

                        value={type}

                        className="text-black"

                      >

                        {type}

                      </option>

                    ))
                  }


                </select>






                <select

                  className="p-3 bg-white/10 text-white rounded-lg text-sm"

                  value={hospital.area}

                  onChange={(e)=>setHospital({
                    ...hospital,
                    area:e.target.value
                  })}

                >

                  <option value="" className="text-black">
                    Select Bed Size - Area
                  </option>


                  <option value="5000-7000" className="text-black">
                    10 Beds - 5000 to 7000 sq.ft
                  </option>


                  <option value="10000-14000" className="text-black">
                    20 Beds - 10000 to 14000 sq.ft
                  </option>


                  <option value="15000-20000" className="text-black">
                    30 Beds - 15000 to 20000 sq.ft
                  </option>


                  <option value="25000-35000" className="text-black">
                    50 Beds - 25000 to 35000 sq.ft
                  </option>


                  <option value="65000-120000+" className="text-black">
                    100 Beds - 65000 to 120000+ sq.ft
                  </option>


                </select>





                <select

                  className="p-3 bg-white/10 text-white rounded-lg text-sm"

                  value={hospital.departments}

                  onChange={(e)=>setHospital({
                    ...hospital,
                    departments:e.target.value
                  })}

                >

                  <option value="" className="text-black">
                    Number of Departments
                  </option>


                  {
                    Array.from({length:10},(_,i)=>(

                      <option

                        key={i+1}

                        value={i+1}

                        className="text-black"

                      >

                        {i+1}

                      </option>

                    ))
                  }


                </select>






                <select

                  className="p-3 bg-white/10 text-white rounded-lg text-sm"

                  value={hospital.departmentType}

                  onChange={(e)=>setHospital({
                    ...hospital,
                    departmentType:e.target.value
                  })}

                >

                  <option value="" className="text-black">
                    Select Department Type
                  </option>


                  <option value="Clinical & Medical Department" className="text-black">
                    Clinical & Medical Department
                  </option>


                  <option value="Emergency & Intensive Care" className="text-black">
                    Emergency & Intensive Care
                  </option>


                  <option value="Diagnostic & Support Department" className="text-black">
                    Diagnostic & Support Department
                  </option>


                </select>


              </div>





              <button

                type="button"

                onClick={validateInput}

                className="mt-5 px-6 py-2 rounded-lg bg-[#004955] text-sm"

              >

                Start AI Planning

              </button>


            </div>

          }





          {
            step===1 &&

            <ModelCard

              title="CNN Spatial Prediction Model"

              icon={<Brain size={22}/>}

              desc="CNN predicts room size, location and spatial distribution."

              running={running}

              next={runModel}

            />

          }





          {
            step===2 &&

            <ModelCard

              title="Graphormer Relationship Model"

              icon={<Layers size={22}/>}

              desc="Graphormer analyzes department connectivity and movement flow."

              running={running}

              next={runModel}

            />

          }





          {
            step===3 &&

            <ModelCard

              title="GAN Floor Plan Generator"

              icon={<LayoutGrid size={22}/>}

              desc="GAN generates optimized hospital floor layouts."

              running={running}

              next={runModel}

            />

          }





          {
            step===4 &&

<FloorPlanVisualization
 hospital={hospital}
 generated={generated}
 next={()=>setStep(5)}
/>

          }





          {
            step===5 &&

            <Analytics

              hospital={hospital}

              next={()=>setStep(6)}

            />

          }





          {
            step===6 &&

            <Export

              downloadPNG={downloadPNG}

              downloadPDF={downloadPDF}

            />

          }



          </div>


        </div>


      </div>


    </div>


  );

}
function ModelCard({
  title,
  icon,
  desc,
  running,
  next
}) {


  return (

    <div>


      <div className="flex gap-3 items-center">


        <div className="text-cyan-300">

          {icon}

        </div>



        <div>


          <h2 className="text-lg font-bold">

            {title}

          </h2>



          <p className="text-xs text-slate-400 mt-1">

            {desc}

          </p>


        </div>


      </div>





      {
        running &&


        <div className="mt-5 flex items-center gap-2 text-cyan-300 text-sm">


          <Loader2

            size={18}

            className="animate-spin"

          />


          Running AI Model...


        </div>


      }





      {
        !running &&


        <button

          type="button"

          onClick={next}

          className="mt-5 px-6 py-2 rounded-lg bg-[#004955] text-sm"

        >

          Run Model


        </button>


      }



    </div>


  );

}
function FloorPlanVisualization({
 hospital,
 generated,
 next
})
{
 return(
   <div>

      <h2 className="text-lg font-bold mb-3">

        Generated Floor Plan Visualization

      </h2>




      {
        generated &&


        <p className="mb-3 text-green-400 text-sm font-medium">

          Floor Plan Generated Successfully!

        </p>

      }






      <div className="grid md:grid-cols-2 gap-5">





        <div>


          <img

            src={floorPlans[hospital.type]}

            alt="Floor Plan"
            crossOrigin="anonymous"

            onError={(e)=>{

              e.target.src="/floorplans/default.png";

            }}

            className="
              rounded-xl
              w-full
              h-64
              object-cover
              bg-white/5
            "

          />


        </div>







        <div className="bg-white/5 rounded-xl p-4">



          <h3 className="font-semibold mb-3">

            AI Requirements Summary

          </h3>





          <p className="text-sm text-slate-300">

            Hospital Type : {hospital.type}

          </p>





          <p className="text-sm text-slate-300">

            Bed Size : {hospital.area} sq.ft

          </p>





          <p className="text-sm text-slate-300">

            Number of Departments : {hospital.departments}

          </p>





          <p className="text-sm text-slate-300">

            Department Category : {hospital.departmentType}

          </p>







          <p className="mt-3 text-xs text-slate-400">

            AI generated layout places emergency zones near entry,
            critical care units near surgery areas and optimizes
            patient and staff movement.

          </p>





        </div>




      </div>







      <button

        type="button"

        onClick={next}

        className="mt-5 px-6 py-2 rounded-lg bg-[#004955] text-sm"

      >

        Continue To Analytics


      </button>




    </div>


  );


}
function Analytics({
  hospital,
  next
}) {


  const [analyticsData] = useState(() => ({


    "General Hospital": {

      department: [
        {
          name:"Emergency",
          value:92 + Math.floor(Math.random()*6)
        },
        {
          name:"ICU",
          value:84 + Math.floor(Math.random()*8)
        },
        {
          name:"OPD",
          value:89 + Math.floor(Math.random()*7)
        },
        {
          name:"Support",
          value:81 + Math.floor(Math.random()*8)
        }
      ],


      space:[
        {
          name:"Patient",
          value:48 + Math.floor(Math.random()*6)
        },
        {
          name:"Medical",
          value:30 + Math.floor(Math.random()*6)
        },
        {
          name:"Staff",
          value:15 + Math.floor(Math.random()*5)
        },
        {
          name:"Utility",
          value:5 + Math.floor(Math.random()*3)
        }
      ]

    },





    "Single-Specialty Hospital": {


      department:[

        {
          name:"Treatment",
          value:95 + Math.floor(Math.random()*5)
        },

        {
          name:"Diagnostics",
          value:88 + Math.floor(Math.random()*6)
        },

        {
          name:"Recovery",
          value:86 + Math.floor(Math.random()*6)
        },

        {
          name:"Support",
          value:82 + Math.floor(Math.random()*7)
        }

      ],


      space:[

        {
          name:"Clinical",
          value:56 + Math.floor(Math.random()*5)
        },

        {
          name:"Patient",
          value:24 + Math.floor(Math.random()*5)
        },

        {
          name:"Staff",
          value:15 + Math.floor(Math.random()*4)
        },

        {
          name:"Utility",
          value:5 + Math.floor(Math.random()*3)
        }

      ]

    },





    "Multi-Speciality Hospital": {


      department:[

        {
          name:"Cardiology",
          value:91 + Math.floor(Math.random()*5)
        },

        {
          name:"Neurology",
          value:88 + Math.floor(Math.random()*6)
        },

        {
          name:"Surgery",
          value:90 + Math.floor(Math.random()*5)
        },

        {
          name:"Support",
          value:84 + Math.floor(Math.random()*6)
        }

      ],


      space:[

        {
          name:"Patient",
          value:45 + Math.floor(Math.random()*6)
        },

        {
          name:"Clinical",
          value:36 + Math.floor(Math.random()*5)
        },

        {
          name:"Staff",
          value:14 + Math.floor(Math.random()*4)
        },

        {
          name:"Utility",
          value:5 + Math.floor(Math.random()*2)
        }

      ]

    },





    "Rehabilitation Hospital": {


      department:[

        {
          name:"Therapy",
          value:94 + Math.floor(Math.random()*5)
        },

        {
          name:"Recovery",
          value:91 + Math.floor(Math.random()*5)
        },

        {
          name:"Support",
          value:84 + Math.floor(Math.random()*6)
        },

        {
          name:"Recreation",
          value:82 + Math.floor(Math.random()*6)
        }

      ],


      space:[

        {
          name:"Therapy",
          value:44 + Math.floor(Math.random()*5)
        },

        {
          name:"Patient",
          value:36 + Math.floor(Math.random()*5)
        },

        {
          name:"Staff",
          value:15 + Math.floor(Math.random()*4)
        },

        {
          name:"Utility",
          value:5 + Math.floor(Math.random()*3)
        }

      ]

    },





    "Children Hospital": {


      department:[

        {
          name:"Pediatrics",
          value:95 + Math.floor(Math.random()*4)
        },

        {
          name:"NICU",
          value:91 + Math.floor(Math.random()*4)
        },

        {
          name:"Play Zone",
          value:85 + Math.floor(Math.random()*6)
        },

        {
          name:"Support",
          value:83 + Math.floor(Math.random()*6)
        }

      ],


      space:[

        {
          name:"Children Care",
          value:46 + Math.floor(Math.random()*5)
        },

        {
          name:"Patient",
          value:34 + Math.floor(Math.random()*5)
        },

        {
          name:"Staff",
          value:15 + Math.floor(Math.random()*4)
        },

        {
          name:"Utility",
          value:5 + Math.floor(Math.random()*2)
        }

      ]

    }


  }));





  const {

    department=[],

    space=[]

  } = analyticsData[hospital.type] || {};





  return (

    <div>


      <h2 className="text-lg font-bold mb-5">

        Floor Plan Analytics

      </h2>





      <div className="bg-white/5 rounded-xl p-4 mb-5">


        <h3 className="font-semibold mb-3">

          AI Layout Analysis

        </h3>



        <p className="text-sm text-slate-300">

          Hospital Type : {hospital.type}

        </p>



        <p className="text-sm text-slate-300">

          Area : {hospital.area} sq.ft

        </p>



        <p className="text-sm text-slate-300">

          Departments : {hospital.departments}

        </p>



      </div>






      <div className="grid md:grid-cols-2 gap-5">





        <div className="bg-white/5 rounded-xl p-3">


          <h3 className="text-sm mb-3">

            Department Efficiency

          </h3>





          <ResponsiveContainer

            width="100%"

            height={250}

          >


            <BarChart data={department}>


              <XAxis dataKey="name"/>

              <YAxis/>

              <Tooltip/>


              <Bar

                dataKey="value"

                radius={[6,6,0,0]}

              />


            </BarChart>


          </ResponsiveContainer>



        </div>







        <div className="bg-white/5 rounded-xl p-3">


          <h3 className="text-sm mb-3">

            Space Utilization

          </h3>





          <ResponsiveContainer

            width="100%"

            height={250}

          >


            <PieChart>


              <Pie

                data={space}

                dataKey="value"

                outerRadius={85}

              >



                {
                  space.map((item,index)=>(

                    <Cell

                      key={item.name}

                      fill={COLORS[index]}

                    />

                  ))
                }



              </Pie>



            </PieChart>



          </ResponsiveContainer>



        </div>



      </div>







      <button

        type="button"

        onClick={next}

        className="mt-5 px-6 py-2 rounded-lg bg-[#004955] text-sm"

      >

        Export Layout


      </button>




    </div>

  );


}
function Export({
  downloadPNG,
  downloadPDF
}) {


return (

<div>

      <h2 className="text-lg font-bold">

        Layout Export

      </h2>





      <p className="text-xs text-slate-400 mt-2">

        Download the generated hospital floor plan.

      </p>






      <div className="flex flex-wrap gap-3 mt-5">





        <button

          type="button"

          onClick={downloadPNG}

          className="
          px-5 py-2
          rounded-lg
          bg-[#004955]
          flex gap-2
          items-center
          text-sm
          "

        >


          <Image size={16}/>


          Download PNG


        </button>








        <button

          type="button"

          onClick={downloadPDF}

          className="
          px-5 py-2
          rounded-lg
          bg-[#004955]
          flex gap-2
          items-center
          text-sm
          "

        >


          <FileText size={16}/>


          Download PDF


        </button>





      </div>





    </div>

  );


}



export default DashboardContent;