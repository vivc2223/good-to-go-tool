import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";

interface BusinessCustomerFieldsProps {
  form: UseFormReturn<any>;
  hasUseCase: string;
  onHasUseCaseChange: (value: string) => void;
}

const BusinessCustomerFields: React.FC<BusinessCustomerFieldsProps> = ({
  form,
  hasUseCase,
  onHasUseCaseChange,
}) => {
  const showAdditionalFields =
    hasUseCase === "yes" || hasUseCase === "multiple";

  return (
    <div className="space-y-6">
      <h3
        style={{
          fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
          fontSize: "clamp(20px, 4vw, 24px)",
          fontWeight: "500",
          color: "white",
          marginBottom: "24px",
        }}
      >
        Tell us about your needs
      </h3>

      {/* Gating Question */}
      <div>
        <label
          style={{
            fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            fontSize: "16px",
            color: "white",
            display: "block",
            marginBottom: "16px",
          }}
        >
          Do you already have a specific use case? *
        </label>

        <div className="grid grid-cols-1 gap-3">
          {[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No / Not sure" },
            { value: "multiple", label: "Multiple use cases, want to explore" },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onHasUseCaseChange(option.value)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                hasUseCase === option.value
                  ? "border-[#FF4D00] bg-[#FF4D00]/10"
                  : "border-gray-700 hover:border-gray-500 bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  style={{
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                    fontSize: "16px",
                    color: "white",
                  }}
                >
                  {option.label}
                </span>
                {hasUseCase === option.value && (
                  <div className="w-5 h-5 bg-[#FF4D00] rounded-full flex items-center justify-center">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 6L5 9L10 3"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Additional Fields - Only show if Yes or Multiple */}
      {showAdditionalFields && (
        <div className="space-y-6 mt-6">
          <FormField
            control={form.control}
            name="useCases"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  style={{
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  Use Cases *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g., Towel folding, Assembly line automation"
                    className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#FF4D00]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="locationOfSites"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  style={{
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  Location of Sites (State / Country) (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g., California, USA"
                    className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#FF4D00]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unitsNeeded"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  style={{
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  Units Needed (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    placeholder="e.g., 10"
                    className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#FF4D00]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default BusinessCustomerFields;
