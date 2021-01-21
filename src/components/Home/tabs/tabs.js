import React from 'react';
import './tabs.css'

// import rightsider from '../../../assets/images/kid-class.svg'
// import tab from '../../../utils/tab'

class Tabs extends React.Component {

    state = {}

    componentDidMount() { }

    openCity = (evt, cityName) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        // document.getElementById(cityName).style.display = "block";
        // evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    openDefault = () => {
        document.getElementById("defaultOpen").click();
    }


    render() {
        return (
            <div className='tablets'>
                <div className="content">
                    <h1>
                        Explore all courses for each subject.
                    </h1>

                    <p>
                        Soma1on1 literary means learn one on one with a professional tutor of your choice. Whether<br/>
                        you are a learner or parent, now you can have access to a wider variety of subject and their<br/>
                        tutors more easily than ever before.
                    </p>
                </div>

                {/* <div className="tab">
                    <button className="tablinks" onClick={this.openCity('London')} id="defaultOpen">London</button>
                    <button className="tablinks" onClick={this.openCity('Paris')}>Paris</button>
                    <button className="tablinks" onClick={this.openCity('Tokyo')}>Tokyo</button>
                </div> */}

                {/* <div id="London" className="tabcontent">
                    <h3>London</h3>
                    <p>London is the capital city of England.</p>
                </div> */}

                {/* <div id="Paris" className="tabcontent">
                    <h3>Paris</h3>
                    <p>Paris is the capital of France.</p>
                </div>

                <div id="Tokyo" className="tabcontent">
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
                </div>

                <script></script> */}
            </div>
        )
    }
}

export default Tabs;
