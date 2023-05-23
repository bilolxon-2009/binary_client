import React, { useState } from 'react'
import style from "./Team.module.scss"
import ScrollRoute from '../../utils/scrollroute/Scrollroute'
import dev_img from "../../assets/dev-image.svg"
import dev_icon from "../../assets/🧑_💻.svg"
import artist from "../../assets/🧑_🎨.svg"
import book_icon from "../../assets/📕📈📃.svg"
import avexdesign from "../../assets/avexdesign.svg"
import najottalin from "../../assets/najot-talim.svg"
import binary from "../../assets/binary.svg"
import king from "../../assets/👑.svg"
import person from "../../assets/team_person_img.svg"
import avextext from "../../assets/AVEX.svg"
import najot_talim_black from "../../assets/najottalim_black.svg"
import { team_data } from './static'
import { Container, MainLink } from '../../utils/Components'

function Team() {
    const [selectedData, setSelectedData] = useState(team_data[0])

    const selectDev = (id) => {
        const selected = team_data.find(item => item.id === id)
        console.log(selected)
        setSelectedData(selected)
    }

    return (
        <div className={style.team} id='team'>
            <Container>
                <div className={style.team_container}>
                    <div className={style.team_left}>
                        <div className={style.team_dev}>
                            <img src={selectedData.avatar} alt="" className={style.team_dev_img} />
                            <div className={style.team_dev_name}>
                                <h1>{selectedData.name}</h1>
                                <span>{selectedData.role} ({selectedData.exprience} y.)</span>
                            </div>
                            <img src={dev_icon} alt="" className={style.team_dev_icons} />
                        </div>

                        <p className={style.dev_text}>
                            {selectedData.desc}</p>

                        <div className={style.team_left_devs}>
                            {team_data.map(data => (
                                <div className={`${style.team_dev_avatar} ${data.id === selectedData.id ? style.devs_selected : ""}`} onClick={() => selectDev(data.id)} >
                                    <div className={style.team_dev_tooltip}>
                                        <div className={style.team_dev_tooltip_text}>
                                            <h1>{data.name}</h1>
                                            <p>{data.role}</p>
                                        </div>
                                        <img src={artist} alt="" />
                                    </div>
                                    <img src={data.avatar} alt="" />
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className={style.team_right}>
                        <div className={style.team_right_item1}>
                            <img src={avexdesign} alt="" />
                            <img src={avextext} alt="" />
                        </div>
                        <img src={najottalin} className={style.team_right_item2} alt="" />
                        <div className={style.team_right_item3} >
                            <img src={binary} alt="" />

                        </div>
                        <div className={style.team_right_item4}>
                            <img src={selectedData.image} alt="" />
                        </div>
                        <div className={style.team_right_item5}>
                            <h1>{selectedData.name}</h1>
                        </div>
                        <div className={style.team_right_item6}>
                            <img src={king} alt="" />
                        </div>
                    </div>

                    <div className={style.team_media_container}>
                        <h1>Лучшая команда🎖️
                            <br />
                            с лучшими опытами 🎯
                            <br />
                            в лучших компаниях🏙️</h1>
                        <div className={style.team_media_collection}>
                            <div className={style.team_media_items}>
                                <div className={style.team_media_item1}>
                                    <img src={selectedData.image} alt="" />
                                </div>
                                <div className={style.team_media_item2}>
                                    <div className={style.team_media_item2_text}>
                                        <h1>{selectedData.name.split(" ")[0]}</h1>
                                        <h1>{selectedData.name.split(" ")[1]}</h1>
                                    </div>
                                    <div className={style.team_media_item2_imgs}>
                                        <img src={avexdesign} alt="" />
                                        <img src={avextext} alt="" />
                                    </div>


                                </div>
                                <div className={style.team_media_item3}>
                                    <img src={binary} alt="" />
                                    <img src={najot_talim_black} className={style.team_right_item2} alt="" />
                                </div>
                                <div className={style.team_media_item4}>
                                    <img src={king} alt="" />
                                </div>
                            </div>
                            <div className={style.team_media_items}>
                                <div className={style.team_media_item1}>
                                    <img src={selectedData.image} alt="" />
                                </div>
                                <div className={style.team_media_item2}>
                                    <div className={style.team_media_item2_text}>
                                        <h1>{selectedData.name.split(" ")[0]}</h1>
                                        <h1>{selectedData.name.split(" ")[1]}</h1>
                                    </div>
                                    <div className={style.team_media_item2_imgs}>
                                        <img src={avexdesign} alt="" />
                                        <img src={avextext} alt="" />
                                    </div>


                                </div>
                                <div className={style.team_media_item3}>
                                    <img src={binary} alt="" />
                                    <img src={najot_talim_black} className={style.team_right_item2} alt="" />
                                </div>
                                <div className={style.team_media_item4}>
                                    <img src={king} alt="" />
                                </div>
                            </div>
                            <div className={style.team_media_items}>
                                <div className={style.team_media_item1}>
                                    <img src={selectedData.image} alt="" />
                                </div>
                                <div className={style.team_media_item2}>
                                    <div className={style.team_media_item2_text}>
                                        <h1>{selectedData.name.split(" ")[0]}</h1>
                                        <h1>{selectedData.name.split(" ")[1]}</h1>
                                    </div>
                                    <div className={style.team_media_item2_imgs}>
                                        <img src={avexdesign} alt="" />
                                        <img src={avextext} alt="" />
                                    </div>


                                </div>
                                <div className={style.team_media_item3}>
                                    <img src={binary} alt="" />
                                    <img src={najot_talim_black} className={style.team_right_item2} alt="" />
                                </div>
                                <div className={style.team_media_item4}>
                                    <img src={king} alt="" />
                                </div>
                            </div>
                            <div className={style.team_media_items}>
                                <div className={style.team_media_item1}>
                                    <img src={selectedData.image} alt="" />
                                </div>
                                <div className={style.team_media_item2}>
                                    <div className={style.team_media_item2_text}>
                                        <h1>{selectedData.name.split(" ")[0]}</h1>
                                        <h1>{selectedData.name.split(" ")[1]}</h1>
                                    </div>
                                    <div className={style.team_media_item2_imgs}>
                                        <img src={avexdesign} alt="" />
                                        <img src={avextext} alt="" />
                                    </div>


                                </div>
                                <div className={style.team_media_item3}>
                                    <img src={binary} alt="" />
                                    <img src={najot_talim_black} className={style.team_right_item2} alt="" />
                                </div>
                                <div className={style.team_media_item4}>
                                    <img src={king} alt="" />
                                </div>
                            </div>
                            <div className={style.team_media_items}>
                                <div className={style.team_media_item1}>
                                    <img src={selectedData.image} alt="" />
                                </div>
                                <div className={style.team_media_item2}>
                                    <div className={style.team_media_item2_text}>
                                        <h1>{selectedData.name.split(" ")[0]}</h1>
                                        <h1>{selectedData.name.split(" ")[1]}</h1>
                                    </div>
                                    <div className={style.team_media_item2_imgs}>
                                        <img src={avexdesign} alt="" />
                                        <img src={avextext} alt="" />
                                    </div>


                                </div>
                                <div className={style.team_media_item3}>
                                    <img src={binary} alt="" />
                                    <img src={najot_talim_black} className={style.team_right_item2} alt="" />
                                </div>
                                <div className={style.team_media_item4}>
                                    <img src={king} alt="" />
                                </div>
                            </div>
                            <div className={style.team_media_items}>
                                <div className={style.team_media_item1}>
                                    <img src={selectedData.image} alt="" />
                                </div>
                                <div className={style.team_media_item2}>
                                    <div className={style.team_media_item2_text}>
                                        <h1>{selectedData.name.split(" ")[0]}</h1>
                                        <h1>{selectedData.name.split(" ")[1]}</h1>
                                    </div>
                                    <div className={style.team_media_item2_imgs}>
                                        <img src={avexdesign} alt="" />
                                        <img src={avextext} alt="" />
                                    </div>


                                </div>
                                <div className={style.team_media_item3}>
                                    <img src={binary} alt="" />
                                    <img src={najot_talim_black} className={style.team_right_item2} alt="" />
                                </div>
                                <div className={style.team_media_item4}>
                                    <img src={king} alt="" />
                                </div>
                            </div>
                            <div className={style.team_media_items}>
                                <div className={style.team_media_item1}>
                                    <img src={selectedData.image} alt="" />
                                </div>
                                <div className={style.team_media_item2}>
                                    <div className={style.team_media_item2_text}>
                                        <h1>{selectedData.name.split(" ")[0]}</h1>
                                        <h1>{selectedData.name.split(" ")[1]}</h1>
                                    </div>
                                    <div className={style.team_media_item2_imgs}>
                                        <img src={avexdesign} alt="" />
                                        <img src={avextext} alt="" />
                                    </div>


                                </div>
                                <div className={style.team_media_item3}>
                                    <img src={binary} alt="" />
                                    <img src={najot_talim_black} className={style.team_right_item2} alt="" />
                                </div>
                                <div className={style.team_media_item4}>
                                    <img src={king} alt="" />
                                </div>
                            </div>
                            <div className={style.team_media_items}>
                                <div className={style.team_media_item1}>
                                    <img src={selectedData.image} alt="" />
                                </div>
                                <div className={style.team_media_item2}>
                                    <div className={style.team_media_item2_text}>
                                        <h1>{selectedData.name.split(" ")[0]}</h1>
                                        <h1>{selectedData.name.split(" ")[1]}</h1>
                                    </div>
                                    <div className={style.team_media_item2_imgs}>
                                        <img src={avexdesign} alt="" />
                                        <img src={avextext} alt="" />
                                    </div>


                                </div>
                                <div className={style.team_media_item3}>
                                    <img src={binary} alt="" />
                                    <img src={najot_talim_black} className={style.team_right_item2} alt="" />
                                </div>
                                <div className={style.team_media_item4}>
                                    <img src={king} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={style.team_btnWrap}>
                            <MainLink text={"Ваша выгода"} icon={book_icon} link={"#"} />
                        </div>
                    </div>


                </div>


                <div className={style.team_footer}>
                    <div className={style.team_btnWrap}>
                        <MainLink text={"Ваша выгода"} icon={book_icon} link={"#"} />

                    </div>


                    <p >Наша лучшая сторона – показать реальные результаты.
                        Посмотрите ваши выгоды при выборе нас</p>
                </div>


                <ScrollRoute routeName={"team"} />
            </Container>
        </div>
    )
}

export default Team