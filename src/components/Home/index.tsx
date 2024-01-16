import * as Styles from "./styles";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";

export const Home: React.FC = () => {
    return (
        <>
            <Styles.Wrapper>
                <div className="mainDiv">
                    <section>
                        <span className="psicoText">PSICÓLOGA</span>
                        <span className="psicologaName">Stephany C. Brito</span>
                    </section>
                </div>
                <div className="crpContainer">
                    <span className="crpText">CRP-08/29281</span>
                </div>

                <div className="footerDiv">
                    <span>
                        OLÁ, VAMOS FALAR UM POUCO SOBRE <br />
                        PSICOTERAPIA?
                    </span>
                    <div className="footerText">
                        <div className="socialMedia">
                            <BsWhatsapp size={20} />
                            <BsInstagram size={20} />
                            <MdOutlineEmail size={22} />
                        </div>
                        <div className="bottom-align">
                            A psicoterapia é um processo ao qual o individuo
                            busca suporte/auxilio para lidar com demandas
                            psíquicas que causando algum tipo de sofrimento
                        </div>
                        <div className="arrowImage bottom-align">
                            <div>
                                <Image
                                    src="/images/arrow.png"
                                    alt="arrow"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className="bottom-align">
                            Porém não se resume só a isso, a psicoterapia também
                            pode te auxiliar no seu desenvolvimento
                            profissional, e na busca do autoconhecimento e muito
                            mais.
                        </div>
                    </div>
                </div>
            </Styles.Wrapper>
        </>
    );
};
