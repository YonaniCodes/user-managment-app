import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <p>{date.getDate()}   </p>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
