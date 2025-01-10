
import React, { useState } from 'react';

function BookingForm(props) {
    
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const occasions = ["Birthday", "Anniversary"];

    const handleDateChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
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
        props.submitForm(e);
        //alert(`Reservation made successfully for ${guests} guest(s) on ${date} at ${time} for a ${occasion}`);
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/*Choose date */}
                        <div>
                            <label htmlFor='book-date'>Choose date:</label>
                            <input id='book-date' name='date' value={date} onChange={handleDateChange} type='date' required />
                        </div>
                        {/*Choose time */}
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id='book-time' name='time' value={time} onChange={handleTimeChange}>
                                <option value=''>Select time</option>
                                {props.availableTimes.availableTimes.map((availableTime) => (
                                    <option key={availableTime} value={availableTime}>
                                        {availableTime}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/*Choose number of guests */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' name='guests' value={guests} onChange={handleGuestsChange} type='number' min={1} required />
                        </div>
                        {/*Occasion */}
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' name='occasion' value={occasion} onChange={handleOccasionChange} required>
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