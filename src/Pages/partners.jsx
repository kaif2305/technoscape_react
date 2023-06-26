import React from 'react'
import Colab_clg from './Header/colab_clg'

import '../Static/css/partners.css'

export default function Partners() {
    return (

        <div className="wrapper">
            <div className="page-title">
                <h1>Partners</h1>
                <h3>Our Partners in need</h3>
            </div>

            <Colab_clg />

            <h1 style={{ marginTop: '2%' }}>ACADEMIC PARTNERS</h1>
            <div className="our_team">
                <div className="team_member">
                    <div className="img-container1-partner">
                        <img src="images/Thünen-removebg-preview.png" alt="our_team" />
                    </div>
                    <h3>Thünen-Institute of Organic Farming, GERMANY</h3>
                </div>
                <div className="team_member">
                    <div className="img-container1-partner">
                        <img src="images/Universiti_-removebg-preview.png" alt="our_team" />
                    </div>
                    <h3>Universiti Malaya, MALAYSIA</h3>

                </div>
                <div className="team_member">
                    <div className="img-container1-partner">
                        <img src="images/Tunku Abdul Rahman.jpeg" alt="our_team" />
                    </div>
                    <h3>Universiti Tunku Abdul Rahman, MALAYSIA</h3>
                </div>
                <div className="team_member">
                    <div className="img-container1-partner">
                        <img src="images/UNIST.jpg" alt="our_team" />
                    </div>
                    <h3>Ulsan National Institute of Science and Technology (UNIST), SOUTH KOREA</h3>
                </div>

                <div className="our_team">
                    <div className="team_member">
                        <div className="img-container1-partner">
                            <img src="images/Taipei-removebg-preview.png" alt="our_team" />
                        </div>
                        <h3>National Taipei University of Technology, TAIWAN</h3>
                    </div>
                </div>
            </div>

            <h1>INDUSTRIAL PARTNERS</h1>
            <div className="our_team">
                <div className="team_member">
                    <div className="img-container2-partner">
                        <img src="images/azumi-removebg-preview.png" alt="our_team" />
                    </div>
                    <h3>Azumi Filter Paper Co., Ltd – JAPAN</h3>
                </div>
                <div className="team_member">
                    <div className="img-container3-partner">
                        <img src="images/nitto-removebg-preview.png" alt="our_team" />
                    </div>
                    <h3>Nitto hydranautics, USA</h3>
                </div>
            </div>

            <h1>SUSTAINABILITY PARTNERS</h1>
            <div className="our_team">
                <div className="team_member">
                    <div className="img-container2-partner">
                        <img src="images/RANITEC.jpeg" alt="our_team" />
                    </div>
                    <h3>RANITEC, INDIA</h3>
                </div>
                <div className="team_member">
                    <div className="img-container-square-partner">
                        <img src="images/Jabatan Kerja Raya , Malaysia.png" alt="our_team" />
                    </div>
                    <h3>Jabatan Kerja Raya,Malaysia</h3>
                </div>
                <div className="team_member">
                    <div className="img-container-square-partner">
                        <img src="images/African.jpeg" alt="our_team" />
                    </div>
                    <h3>African Water and Sanitation Association, Ivory Coast</h3>
                </div>
                <div className="team_member">
                    <div className="img-container-square-partner">
                        <img src="images/RALLY RIVERS.jpeg" alt="our_team" />
                    </div>
                    <h3>Rally for Rivers,INDIA</h3>
                </div>


                <div className="team_member">
                    <div className="img-container-square-partner">
                        <img src="images/save soil.png" alt="our_team" />
                    </div>
                    <h3>Save Soil,INDIA</h3>
                </div>

                <div className="team_member">
                    <div className="img-container2-partner">
                        <img src="images/Watershed Organisation Trust, India.jpg" alt="our_team" />
                    </div>
                    <h3>Watershed Organisation Trust, India</h3>
                </div>

                <div className="team_member">
                    <div className="img-container-square-partner">
                        <img src="images/Force.jpeg" alt="our_team" />
                    </div>
                    <h3>FORCE,India</h3>
                </div>

            </div>
        </div >
    )
}
