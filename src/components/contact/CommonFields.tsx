import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";

interface CommonFieldsProps {
  form: UseFormReturn<any>;
}

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees",
];

const CommonFields: React.FC<CommonFieldsProps> = ({ form }) => {
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
        Tell us about yourself
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                style={{
                  fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                Full Name *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="John Doe"
                  className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#FF4D00]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                style={{
                  fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                Work Email *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="john@company.com"
                  className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#FF4D00]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                style={{
                  fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                Title *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="CEO"
                  className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#FF4D00]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                style={{
                  fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                Company *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Acme Inc."
                  className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#FF4D00]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companySize"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                style={{
                  fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                Company Size *
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white/5 border-gray-700 text-white focus:border-[#FF4D00]">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-gray-900 border-gray-700">
                  {companySizes.map((size) => (
                    <SelectItem key={size} value={size} className="text-white hover:bg-white/10">
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                style={{
                  fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                Country (Optional)
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="United States"
                  className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#FF4D00]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel
              style={{
                fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
                fontSize: "14px",
                color: "white",
              }}
            >
              Message *
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="I'd love to know more about Dyna!"
                rows={5}
                className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#FF4D00] resize-none"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CommonFields;
