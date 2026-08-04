import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { User, LogOut, Bot } from "lucide-react";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  const [chatMessages, setChatMessages] = useState([
    {
      text: "Hi! I am MediPlan AI Assistant. Ask me about hospital planning, AI layouts, optimization, or healthcare design.",
      sender: "ai",
    },
  ]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.state?.user) {
      setUser(location.state.user);
    } else {
      navigate("/get-started");
    }
  }, [location.state, navigate]);

  const handleLogout = () => {
    navigate("/get-started");
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;

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
      const response = await fetch(
        "http://localhost:11434/api/chat",
        {
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
                  "You are MediPlan AI Assistant. Explain hospital floor planning, healthcare architecture, AI generated layouts, CNN, Graphormer, GAN models, room allocation, emergency planning, workflow optimization, and healthcare infrastructure in simple terms.",
              },

              {
                role: "user",
                content: userMessage,
              },
            ],

            stream: false,
          }),
        }
      );

      const data = await response.json();

      const aiReply =
        data?.message?.content ||
        "No response generated.";

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
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden p-4 text-white">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/Bgd.png')" }}
      ></div>

      <div className="absolute inset-0 bg-[#10284E]/90"></div>


      <div className="relative z-10 max-w-7xl mx-auto h-[calc(100vh-2rem)] flex flex-col md:flex-row gap-6">


        <div className="md:w-[30%] flex flex-col gap-4 h-full">


          <div className="glass rounded-3xl p-5 flex flex-col gap-4">

            <div className="flex items-center gap-3">

              <User
                className="text-cyan-300"
                size={24}
              />

              <h2 className="text-xl font-semibold">
                Profile
              </h2>

            </div>


            <div className="flex flex-col gap-2 text-sm text-slate-300">

              <p>
                <span className="font-semibold text-white">
                  Name:
                </span>{" "}
                {user.name}
              </p>


              <p>
                <span className="font-semibold text-white">
                  Email:
                </span>{" "}
                {user.email}
              </p>

            </div>


            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#004955] hover:bg-[#105E60] transition"
            >

              <LogOut size={16} />

              Logout

            </button>


          </div>


          <div className="glass rounded-3xl p-5 flex flex-col gap-4 flex-1">


            <div className="flex items-center gap-3">

              <Bot
                className="text-cyan-300"
                size={22}
              />

              <h2 className="text-xl font-semibold">
                AI Planning Assistant
              </h2>

            </div>


            <div className="flex-1 overflow-y-auto rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col gap-3">


              {chatMessages.map((chat, index) => (

                <div
                  key={index}
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    chat.sender === "user"
                      ? "bg-[#004955] text-white self-end"
                      : "bg-white/10 text-slate-300 self-start"
                  }`}
                >

                  {chat.text}

                </div>

              ))}


              {loading && (
                <p className="text-sm text-slate-400">
                  AI is thinking...
                </p>
              )}


            </div>


            <div className="flex gap-2">

              <textarea
                rows="1"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey
                  ) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask AI assistant..."
                className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 outline-none resize-none text-sm"
              />


              <button
                onClick={handleSend}
                disabled={loading}
                className="px-4 rounded-xl bg-[#004955] hover:bg-[#105E60] transition"
              >
                Send
              </button>


            </div>


          </div>


        </div>


        <div className="md:w-[70%] h-full overflow-hidden rounded-3xl">

          <DashboardContent />

        </div>


      </div>


    </div>
  );
}

export default Dashboard;