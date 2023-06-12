import type { NextComponentType } from "next";
import * as Styles from "./styles";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";

export const About: NextComponentType = () => {
    return (
        <>
            <Styles.Wrapper>
                <div className="mainDiv">
                    <span>Sobre</span>
                    <div className="handwrite title">Satisfação!</div>
                </div>
                <div className="aboutBody">
                    <div className="aboutBodyItem">
                        <div className="aboutBodyItemText">
                            Meu nome é Stephany, sou graduada em psicologia,
                            atualmente atendo o público infantil e adulto. Meu
                            propósito é que as pessoas tenham mais acesso a
                            saúde mental e a qualidade de vida!
                        </div>
                        <div className="aboutBodyItemImage">
                            <Image
                                src="/images/butterfly.png"
                                alt="arrow"
                                width={200}
                                height={150}
                            />
                        </div>
                    </div>
                    <div className="aboutBodyItem">
                        <div className="aboutBodyItemImage">
                            <Image
                                src="/images/circles.png"
                                alt="arrow"
                                width={200}
                                height={150}
                            />
                        </div>
                        <div className="aboutBodyItemText align-right">
                            Na psicoterapia você terá uma escuta empática, livre
                            de julgamentos e sigilosa. É por meio das sessões de
                            terapia, que o paciente pode entrar em contato com
                            suas angústias, dificuldades e resssignificar suas
                            vivências.
                        </div>
                    </div>
                </div>
            </Styles.Wrapper>
        </>
    );
};
