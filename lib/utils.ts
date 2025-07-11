import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Demo booking API endpoint
const DEMO_BOOKING_URL =
  "https://automation.moezzhioua.com/webhook/book-demo";

export interface DemoBookingData {
  firstName: string;
  lastName: string;
  email: string;
  practiceName: string;
  message?: string;
}

export interface DemoBookingResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function requestDemo(data: DemoBookingData): Promise<DemoBookingResponse> {
  try {
    const response = await fetch(DEMO_BOOKING_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || "Demo booking request sent successfully!",
    };
  } catch (error) {
    console.error("Error sending demo booking request:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred",
    };
  }
}
