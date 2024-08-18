import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

function Home() {
  // Usestate for Data
  const navigate = useNavigate();
  const [dataset, setDataset] = useState([]);
  const [nama, setNama] = useState([]);
  const [email, setEmail] = useState([]);
  const [no_telp, setNo_telp] = useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const { data } = await supabase.from("EmailTampung").select();
    setDataset(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic Form Validation
    if (!nama) {
      alert("Please enter your name.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern validation
    if (!email || !emailPattern.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("EmailTampung")
        .insert([
          { nama: nama, email: email, no_telp: no_telp, status: false },
        ]);

      window.location.reload();
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex flex-column justify-center items-center h-[100vh] ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-10 sm:w-[400px] w-[300px] gap-6">
            <div className="flex flex-col gap-2">
              <p className="sm:text-3xl text-2xl font-medium">
                Weekly Newsletter By Kals
              </p>
              <p className="sm:text-lg text-sm text-gray-400 font-light">
                Discover insights, personal stories, and the things that inspire
                me each week, straight to your inbox.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label for="nama" className="text-sm font-medium text-gray-900">
                Your Full Name
              </label>
              <input
                type="text"
                className="border-solid border-2 py-2 px-4 rounded-lg border-slate-300 "
                placeholder="Name: e.g., John Doe"
                name="nama"
                id="nama"
                defaultValue={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label for="email" className="text-sm font-medium text-gray-900">
                Your Email Address
              </label>
              <input
                type="text"
                className="border-solid border-2 py-2 px-4 rounded-lg border-slate-300 "
                placeholder="Email: e.g., johndoe@example.com"
                name="email"
                id="email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                for="no_telp"
                className="text-sm font-medium text-gray-900"
              >
                Your Contact Number
              </label>
              <input
                type="text"
                className="border-solid border-2 py-2 px-4 rounded-lg border-slate-300 "
                placeholder="Phone Number: e.g., +123456789"
                name="no_telp"
                id="no_telp"
                defaultValue={no_telp}
                onChange={(e) => setNo_telp(e.target.value)}
              />
            </div>
            <button
              className="w-full py-3 bg-slate-800 rounded-lg text-white"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Subscribe Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
