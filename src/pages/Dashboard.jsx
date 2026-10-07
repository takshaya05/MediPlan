import { useState } from "react";
import { Bot, Edit3, LogOut, Save, User, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import "../dashboard.css";

const defaultProfile = {
  name: "SampleUser",
  email: "Sample@email.com",
  phone: "+91 XXXXX-XXXXX",
  role: "Hospital Planner",
  hospital: "MediPlan Hospital",
  department: "Planning & Infrastructure",
};

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedProfile = localStorage.getItem("mediplanProfile");
    return savedProfile ? JSON.parse(savedProfile) : defaultProfile;
  });

  const [profileForm, setProfileForm] = useState(user);
  const [editingProfile, setEditingProfile] = useState(false);

  const [message, setMessage] = useState("");

  const [chatMessages, setChatMessages] = useState([
    {
      text: "Hi! I am MediPlan AI Assistant. Ask me about hospital planning, AI layouts, optimization, or healthcare design.",
      sender: "ai",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const handleEditProfile = () => {
    setProfileForm(user);
    setEditingProfile(true);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfileForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = () => {
    const updatedProfile = {
      ...profileForm,
      name: profileForm.name.trim() || "SampleUser",
      email: profileForm.email.trim() || "Sample@email.com",
      phone: profileForm.phone.trim(),
      role: profileForm.role.trim(),
      hospital: profileForm.hospital.trim(),
      department: profileForm.department.trim(),
    };

    setUser(updatedProfile);

    localStorage.setItem(
      "mediplanProfile",
      JSON.stringify(updatedProfile)
    );

    setEditingProfile(false);
  };

  const handleCancelProfile = () => {
    setProfileForm(user);
    setEditingProfile(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setChatMessages((prev) => [
      ...prev,
      {
        text: userMessage,
        sender: "user",
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3.2:1b",
          messages: [
            {
              role: "system",
              content:
                "You are MediPlan AI Assistant. Explain hospital floor planning, healthcare architecture, AI-generated layouts, CNN, Graphormer, GAN models, room allocation, emergency planning, workflow optimization, and healthcare infrastructure in simple terms.",
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error("AI request failed");
      }

      const data = await response.json();

      const aiReply =
        data?.message?.content || "No response generated.";

      setChatMessages((prev) => [
        ...prev,
        {
          text: aiReply,
          sender: "ai",
        },
      ]);
    } catch {
      setChatMessages((prev) => [
        ...prev,
        {
          text: "Failed to connect with MediPlan AI model.",
          sender: "ai",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="dashboard-page">
      <div className="dashboard-glow dashboard-glow-left" />
      <div className="dashboard-glow dashboard-glow-right" />
      <div className="dashboard-glow dashboard-glow-center" />

      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <div className="profile-card dashboard-card">
            <div className="profile-header">
              <div className="profile-icon">
                <User size={21} />
              </div>

              <div>
                <h2>Profile</h2>
                <p>Hospital planning account</p>
              </div>
            </div>

            {!editingProfile ? (
              <>
                <div className="profile-details">
                  <div className="profile-detail">
                    <span>Name</span>
                    <strong>{user.name}</strong>
                  </div>

                  <div className="profile-detail">
                    <span>Email</span>
                    <strong>{user.email}</strong>
                  </div>

                  <div className="profile-detail">
                    <span>Phone</span>
                    <strong>{user.phone || "Not provided"}</strong>
                  </div>

                  <div className="profile-detail">
                    <span>Role</span>
                    <strong>{user.role || "Not provided"}</strong>
                  </div>

                  <div className="profile-detail">
                    <span>Hospital</span>
                    <strong>{user.hospital || "Not provided"}</strong>
                  </div>

                  <div className="profile-detail">
                    <span>Department</span>
                    <strong>{user.department || "Not provided"}</strong>
                  </div>
                </div>

                <div className="profile-actions">
                  <button
                    onClick={handleEditProfile}
                    className="dashboard-button edit-button"
                  >
                    <Edit3 size={16} />
                    Edit Profile
                  </button>

                  <button
                    onClick={handleLogout}
                    className="dashboard-button logout-button"
                  >
                    <LogOut size={16} />
                    Exit Dashboard
                  </button>
                </div>
              </>
            ) : (
              <div className="profile-form">
                <label>
                  Name
                  <input
                    name="name"
                    value={profileForm.name}
                    onChange={handleProfileChange}
                    placeholder="Enter your name"
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={profileForm.email}
                    onChange={handleProfileChange}
                    placeholder="Enter your email"
                  />
                </label>

                <label>
                  Phone
                  <input
                    name="phone"
                    value={profileForm.phone}
                    onChange={handleProfileChange}
                    placeholder="Enter your phone"
                  />
                </label>

                <label>
                  Role
                  <input
                    name="role"
                    value={profileForm.role}
                    onChange={handleProfileChange}
                    placeholder="Enter your role"
                  />
                </label>

                <label>
                  Hospital
                  <input
                    name="hospital"
                    value={profileForm.hospital}
                    onChange={handleProfileChange}
                    placeholder="Enter hospital name"
                  />
                </label>

                <label>
                  Department
                  <input
                    name="department"
                    value={profileForm.department}
                    onChange={handleProfileChange}
                    placeholder="Enter department"
                  />
                </label>

                <div className="profile-edit-actions">
                  <button
                    onClick={handleSaveProfile}
                    className="dashboard-button save-button"
                  >
                    <Save size={16} />
                    Save Changes
                  </button>

                  <button
                    onClick={handleCancelProfile}
                    className="dashboard-button cancel-button"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="ai-card dashboard-card">
            <div className="ai-header">
              <div className="ai-icon">
                <Bot size={21} />
              </div>

              <div>
                <h2>AI Planning Assistant</h2>
                <p>MediPlan intelligent assistant</p>
              </div>
            </div>

            <div className="chat-box">
              {chatMessages.map((chat, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    chat.sender === "user"
                      ? "chat-user"
                      : "chat-ai"
                  }`}
                >
                  {chat.text}
                </div>
              ))}

              {loading && (
                <div className="chat-message chat-ai">
                  AI is thinking...
                </div>
              )}
            </div>

            <div className="chat-input-area">
              <textarea
                rows="1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask MediPlan AI..."
              />

              <button
                onClick={handleSend}
                disabled={loading}
                className="send-button"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <DashboardContent />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;