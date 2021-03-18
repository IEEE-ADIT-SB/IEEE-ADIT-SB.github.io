/*
const eventDetails = [
    {
        img: "test.png",

    }
]

function EventList() {
    return(
        console.log("hello")
    )
}

function Event(props){
    return (
        <div class="swiper-slide">
            <div class="event">
                <div class="pic">
                    <img src={props.detail.img} alt="" />
                </div>
                <div class="eventDetails">
                    <div className="society">{props.detail.society}</div>
                    <div className="dateTime">
                        <span class="date">
                            <i class="fas fa-calendar-alt"></i>
                            {props.detail.date}
                        </span>
                        <span class="time">
                            <i class="fas fa-clock"></i>
                            {props.detail.time}
                        </span>
                    </div>
                    <div className="fullDetails">
                        <h1>{props.detail.title}</h1>
                        <p>{props.detail.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
*/

class App extends React.Component{
    render() {
        return (
            console.log('hi')
        )
    }
}

ReactDom.render(<App />, document.getElementById('eventSection'))