
import React, { useState } from 'react';

function BookingForm() {
    
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const occasions = ["Birthday", "Anniversary"];

    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };  

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        alert(`Reservation made successfully for ${guests} guest(s) on ${date} at ${time} for a ${occasion}`);
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/*Choose date */}
                        <legend>Make a Reservation</legend>
                        <div>
                            <label htmlFor='date'>Choose date:</label>
                            <input id='date' name='date' value={date} onChange={handleDateChange} type='date' required />
                        </div>
                        {/*Choose time */}
                        <div>
                            <label htmlFor='time'>Choose Time:</label>
                            <select id='time' name='time' value={time} onChange={handleTimeChange}>
                                <option value=''>Select time</option>
                                {availableTimes.map((availableTime) => (
                                    <option key={availableTime} value={availableTime}>
                                        {availableTime}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/*Choose number of guests */}
                        <div>
                            <label htmlFor='guests'>Number of Guests:</label>
                            <input id='guests' name='guests' value={guests} onChange={handleGuestsChange} type='number' min={1} required />
                        </div>
                        {/*Occasion */}
                        <div>
                            <label htmlFor='occasion'>Occasion:</label>
                            <select id='occasion' name='occasion' value={occasion} onChange={handleOccasionChange} required>
                                <option value=''>Select occasion</option>
                                {occasions.map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/*Submit button */}
                        <div className='btnReceive'>
                            <input type='submit' value='Make Your reservation' />
                        </div>
                    </fieldset>
                </form>
            </section>

        </header>
    )
}

export default BookingForm