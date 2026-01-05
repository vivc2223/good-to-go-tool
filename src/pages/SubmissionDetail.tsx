import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  Download,
  FileText,
  Image,
  Video,
  FileImage,
} from "lucide-react";
import axios from "axios";

interface Submission {
  id: string;
  profile_type?: string;
  requester_name: string;
  email: string;
  title: string;
  company: string;
  company_size?: string;
  country?: string;
  message?: string;
  has_use_case?: string;
  use_case?: string;
  states?: string[];
  total_units?: string;
  workflow_media?: string[];
  created_at: string;
}

interface FileObject {
  originalName: string;
  url: string;
  size: number;
  type: string;
}

const SubmissionDetail = () => {
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, session } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/login");
      return;
    }
    if (id && session) {
      fetchSubmission(id);
    }
  }, [isAuthenticated, navigate, id, session]);

  const fetchSubmission = async (submissionId: string) => {
    if (!session) {
      toast({
        title: "Authentication Error",
        description: "No active session found.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(`/api/submission/${submissionId}`, {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (response.data.success) {
        setSubmission(response.data.data);
      } else {
        throw new Error("Failed to fetch submission");
      }
    } catch (error) {
      console.error("Error fetching submission:", error);
      toast({
        title: "Error",
        description: "Failed to load submission details",
        variant: "destructive",
      });
      navigate("/admin/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  if (loading) {
    return (
      <div
        className="min-h-screen w-full relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/lovable-uploads/a73721e9-6bfa-485a-b25d-50bf945ce1ed.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-white text-xl">
          Loading submission details...
        </div>
      </div>
    );
  }

  console.log(submission);

  if (!submission) {
    return (
      <div
        className="min-h-screen w-full relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/lovable-uploads/a73721e9-6bfa-485a-b25d-50bf945ce1ed.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-white text-xl">
          Submission not found
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage:
          "url(/lovable-uploads/a73721e9-6bfa-485a-b25d-50bf945ce1ed.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/lovable-uploads/dyna_logo_white_transparent.png"
              alt="DYNA Logo"
              className="h-10"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">
                Submission Details
              </h1>
              <p className="text-gray-300">ID: {submission.id}</p>
            </div>
          </div>
        </div>

        {/* Submission Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              {submission.profile_type && (
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">
                    Profile Type
                  </label>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                    submission.profile_type === "Business Customer" ? "bg-blue-100 text-blue-800" :
                    submission.profile_type === "Media" ? "bg-purple-100 text-purple-800" :
                    submission.profile_type === "Investor" ? "bg-green-100 text-green-800" :
                    "bg-gray-100 text-gray-800"
                  }`}>
                    {submission.profile_type}
                  </span>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Requester Name
                </label>
                <p className="text-lg text-gray-900">
                  {submission.requester_name}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Email
                </label>
                <p className="text-lg text-gray-900">{submission.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Title
                </label>
                <p className="text-lg text-gray-900">{submission.title}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Company
                </label>
                <p className="text-lg text-gray-900">{submission.company}</p>
              </div>
              {submission.company_size && (
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Company Size
                  </label>
                  <p className="text-lg text-gray-900">{submission.company_size}</p>
                </div>
              )}
              {submission.country && (
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Country
                  </label>
                  <p className="text-lg text-gray-900">{submission.country}</p>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Submitted
                </label>
                <p className="text-lg text-gray-900">
                  {formatDate(submission.created_at)}
                </p>
              </div>
            </div>
          </div>

          {/* Project Information / Message */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {submission.profile_type === "Business Customer" ? "Project Details" : "Message"}
            </h2>
            <div className="space-y-4">
              {submission.message && (
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Message
                  </label>
                  <p className="text-lg text-gray-900">{submission.message}</p>
                </div>
              )}
              {submission.has_use_case && (
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Has Use Case
                  </label>
                  <p className="text-lg text-gray-900">{submission.has_use_case}</p>
                </div>
              )}
              {submission.use_case && (
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Use Case
                  </label>
                  <p className="text-lg text-gray-900">{submission.use_case}</p>
                </div>
              )}
              {submission.total_units && (
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Total Units Needed
                  </label>
                  <p className="text-lg text-gray-900">
                    {submission.total_units}
                  </p>
                </div>
              )}
              {submission.states && submission.states.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    States / Locations
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {submission.states.map((state, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-sm text-gray-900"
                      >
                        {state}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Files Section */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Workflow Media ({submission.workflow_media?.length || 0} files)
            </h2>

            {submission.workflow_media &&
            submission.workflow_media.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {submission.workflow_media.map(
                  (fileString: string, index: number) => {
                    try {
                      const file: FileObject = JSON.parse(fileString);
                      return (
                        <div
                          key={index}
                          className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="text-gray-500 mt-1">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {file.originalName}
                              </p>
                              <p className="text-sm text-gray-500">
                                {formatFileSize(file.size)}
                              </p>
                              <p className="text-xs text-gray-400">
                                {file.type}
                              </p>
                              <a
                                href={file.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm mt-2"
                              >
                                <Download className="w-4 h-4" />
                                <span>Download</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    } catch (error) {
                      console.error("Error parsing workflow media:", error);
                      return (
                        <div
                          key={index}
                          className="border rounded-lg p-4 bg-red-50 border-red-200"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="text-red-500 mt-1">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-red-900">
                                Invalid file data
                              </p>
                              <p className="text-xs text-red-600">
                                Could not parse file information
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  }
                )}
              </div>
            ) : (
              <p className="text-gray-500">No files uploaded</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetail;
