import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function BookAppointmentCalendar() {
  const [date, setDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    // "2:00 PM - 4:00 PM",
    // "4:00 PM - 6:00 PM",
  ];

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const formatMonthYear = (locale, date) =>
    date.toLocaleString(locale, { month: "long" });

  return (
    <div className="calendar-container">
      <h5 className="BookPopUpH textAlignLeft  ">Select a Day</h5>

      <Calendar
        onChange={(value) => {
          setDate(value);
          setSelectedTime("");
        }}
        value={date}
        minDate={new Date()}
        next2Label={null}
        prev2Label={null}
        navigationLabel={({ date, locale }) => formatMonthYear(locale, date)}
      />
      {date && (
        <>
          <h5 className="BookPopUpH textAlignLeft Mbot-0">Select a Time</h5>

          <div className="time-slots">
            {timeSlots.map((time) => (
              <button
                key={time}
                className={`time-slot   ${
                  selectedTime === time ? "selected" : ""
                }`}
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </>
      )}
      {selectedTime && (
        <p className="calendar-result Mbot-0">
          <strong>Selected Time </strong>: {date.toDateString()} at{" "}
          <strong>{selectedTime}</strong>
        </p>
      )}
    </div>
  );
}

export default BookAppointmentCalendar;

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// function BookAppointmentCalendar() {
//   const [date, setDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState('');

//   const timeSlots = [
//     ' 8:00 AM 10:00 AM', '10:00 AM 12:00 AM', '10:00 PM12:00 PM',
//     '2:00 PM 4:00 PM', '4:00 PM 6:00 PM'
//   ];

//   const handleTimeClick = (time) => {
//     setSelectedTime(time);
//   };

//   return (
//     <div className="calendar-container">
//          <h5 className=" BookPopUpH textAlignLeft mrgntb-1">
//                     Select a Day
//                   </h5>

//       <Calendar
//         onChange={(value) => {
//           setDate(value);
//           setSelectedTime('');
//         }}
//         value={date}
//         minDate={new Date()}
//       />

//       {date && (
//         <>
//          <h5 className=" BookPopUpH textAlignLeft mrgntb-1">
//                       Select a Time
//                     </h5>

//           <div className="time-slots">
//             {timeSlots.map((time) => (
//               <button
//                 key={time}
//                 className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
//                 onClick={() => handleTimeClick(time)}
//               >
//                 {time}
//               </button>
//             ))}
//           </div>
//         </>
//       )}

//       {selectedTime && (
//         <p className="calendar-result">
//           Appointment booked for <strong>{date.toDateString()}</strong> at <strong>{selectedTime}</strong>
//         </p>
//       )}
//     </div>
//   );
// }

// export default BookAppointmentCalendar;

// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// // import "./CustomCalendar.css"; // for your custom styles

// function BookAppointmentCalendar (){
// const [date, setDate] = useState(new Date());

// const handleBook = () => {
// alert(`Appointment booked on ${date.toDateString()}`);
// };

// return (
// <div className="calendar-container">
// <h2>Book Your Appointment</h2>
// <Calendar
// onChange={setDate}
// value={date}
// view="month"
// maxDetail="month" // restrict to month view only
// next2Label={null} // hide next year
// prev2Label={null} // hide previous year
// navigationLabel={({ date, label }) =>
// date.getFullYear() === new Date().getFullYear()
// ? label.replace(/, \d+/, "") // remove year from label
// : label
// }
// />
// <p className="selected-date">Selected: {date.toDateString()}</p>
// <button className="book-btn" onClick={handleBook}>
// Book Appointment
// </button>
// </div>
// );
// };

// export default BookAppointmentCalendar;

// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const timeSlots = [
//     "09:00 AM",
//     "10:00 AM",
//     "11:00 AM",
//     "01:00 PM",
//     "02:00 PM",
//     "03:00 PM",
//     "04:00 PM",
// ];

// export default function AppointmentCalendar() {
//     const [date, setDate] = useState(new Date());
//     const [selectedTime, setSelectedTime] = useState(null);

//     // const handleBook = () => {
//     //     if (selectedTime) {
//     //         alert(`Appointment booked on ${date.toDateString()} at ${selectedTime}`);
//     //     } else {
//     //         alert("Please select a time slot");
//     //     }
//     // };

//     return (
//         <>
//             <div className="calendar-container">
//                 <h2 className="title">Book Appointment</h2>
//                 <Calendar
//                     onChange={setDate}
//                     value={date}
//                     next2Label={null}
//                     prev2Label={null}
//                     showNeighboringMonth={false}
//                     formatYear={() => ""} // hide year label
//                     tileDisabled={({ date }) => date < new Date().setHours(0, 0, 0, 0)}
//                 />
//                 <h3 className="subtitle">Available Time Slots</h3>
//                 <div className="time-slots">
//                     {timeSlots.map((slot) => (
//                         <button
//                             key={slot}

//                             className={slot-button $ { isSelected ? " selected" : ""}}
//                     onClick={() => setSelectedTime(slot)}
//                           >
//                     {slot}
//                 </button>
// ))}
//             </div>
//             <button className="book-button" onClick={handleBook}>
//                 Book Now
//             </button>
//         </div >

// </>
// );
// }
