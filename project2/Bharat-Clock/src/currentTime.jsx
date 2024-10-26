function CurrentTime(){
  const date="24/10/2024";
  const time='10:38:17';
   return (
    <center>
      <div className="main-container">
        <div className="card text-center">
          
          <div className="card-body">
             <h1>Bharat Clock</h1>
            <p className="card-text">
               This is the clock that Shows the time in Bharat at all times.
            </p>
             <p className="date-time">
              This is the current time:<b>{date}-{time}</b> AM
             </p>
          </div>

        </div>
      </div>
    </center>
   );
}

export default CurrentTime;