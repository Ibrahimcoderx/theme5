import React from 'react'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '../../../styles/theme5/theme5.module.css'



const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();  

  return (
        <>
            <section>

                {/* ================================================================================================
                   Footer--1
                    ====================================================================================================*/}
                <section >

                    <Container fluid className={styles.ShippingIconSec}>

                            <Row>

                                <Col xs={12} sm={6} md={6} lg={3}>

                                    <Row className={styles.ShippingIconRow}>
                                        <Col xs={5}>
                                                <div className={styles.ShippingImg} >
                                                <img className={styles.ShippingImgSvg1} src='img/b50.svg'></img>
                                                </div>    
                                        </Col>
                    
                                        <Col xs={7}>
                                                <div className={styles.ShippingTxt}>
                                                <h4>90 Days Return</h4>
                                                <p>If goods have problems</p>
                                                </div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col xs={12} sm={6} md={6} lg={3}>

                                    <Row className={styles.ShippingIconRow}>
                                        <Col xs={5}>
                                                <div className={styles.ShippingImg} >
                                                <img className={styles.smallIcon} src='img/b51.svg'></img>
                                                </div>    
                                        </Col>
                    
                                        <Col xs={7}>
                                                <div className={styles.ShippingTxt}>
                                                <h4>Secure Payment</h4>
                                                <p>100% secure payment</p>
                                                </div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col xs={12} sm={6} md={6} lg={3}>

                                    <Row className={styles.ShippingIconRow}>
                                        <Col xs={5}>
                                                <div className={styles.ShippingImg} >
                                                <img className={styles.smallIcon} src='img/b52.svg'></img>
                                                </div>    
                                        </Col>
                    
                                        <Col xs={7}>
                                                <div className={styles.ShippingTxt}>
                                                <h4>24/7 Support</h4>
                                                <p>Dedicated support</p>
                                                </div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col xs={12} sm={6} md={6} lg={3}>

                                    <Row className={styles.ShippingIconRow}>
                                        <Col xs={5}>
                                                <div className={styles.ShippingImg} >
                                                <img className={styles.smallIcon} src='img/b53.svg'></img>
                                                </div>    
                                        </Col>
                    
                                        <Col xs={7}>
                                                <div className={styles.ShippingTxt}>
                                                <h4>Free Delivery</h4>
                                                <p>For all oders over $99</p>
                                                </div>
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>
                            
                    </Container>

                 </section>    





                {/* ================================================================================================
                    Footer-2 
                    ====================================================================================================*/}
                    <section>
                        <Container fluid className={styles.Footer2Con}>
                            <img className={styles.FooterImg1} src="img/f2.png" alt="" />
                            <img className={styles.FooterImg2} src="img/f1.png" alt="" />


                            <Container className={styles.Footer2Con2}>
                                <Row>
                                    <Col xs={12} sm={6} md={6} lg={3}>
                                        <div className={styles.FooterTxtBox}>
                                            <h4>Information</h4>
                                            <ul>
                                                <li><Link href="#">About Company</Link></li>
                                                <li><Link href="#">Payment Type</Link></li>
                                                <li><Link href="#">Awards Winning</Link></li>
                                                <li><Link href="#">World Media Partner</Link></li>
                                                <li><Link href="#">Refund Policy</Link></li>
                                            </ul>
                                        </div>
                                    </Col>

                                    {/* col-- */}
                                    
                                    <Col xs={12} sm={6} md={6} lg={3}>
                                        <div className={styles.FooterTxtBox}>
                                            <h4>Category</h4>
                                            <ul>
                                                <li><Link href="#">Handbags & Wallets</Link></li>

                                                <li><Link href="#">Women's Clothing</Link></li>

                                                <li><Link href="#">Plus Sizes</Link></li>

                                                <li><Link href="#">Complete Your Look</Link></li>
                                                
                                                <li><Link href="#">Baby Corner</Link></li>
                                            </ul>
                                        </div>
                                    </Col>

                                    {/* col-- */}
                                    <Col xs={12} sm={6} md={6} lg={3}>
                                        <div className={styles.FooterTxtBox}>
                                            <h4>Help & Support</h4>
                                            <ul>
                                                <li><Link href="#">Dealers & Agents</Link></li>
                                                <li><Link href="#">FAQ Information</Link></li>
                                                <li><Link href="#">Return Policy</Link></li>
                                                <li><Link href="#">Shipping & Delivery</Link></li>
                                                <li><Link href="#">Order Tranking</Link></li>
                                            </ul>
                                        </div>
                                    </Col>

                                    {/* col-- */}
                                    <Col xs={12} sm={6} md={6} lg={3}>
                                        <div className={styles.FooterTxtBox}>
                                            <h4>Contact Us</h4>
                                            <ul>
                                                <li><Link href="#">SAR Bhaban, Level-5 , Ka-78, Progoti Sarani, Kuril, Vatara, Dhaka-1229, Bangladesh</Link></li>
                                                <li><Link href="#">+8801894844452</Link></li>
                                                <li><Link href="#">support@funnelliner.com</Link></li>
                                             
                                            </ul>
                                        </div>
                                    </Col>

                                    {/* col-- */}



                                </Row>


                             

                                <div className={styles.lastdiv}>
                                <div className={styles.hrF3}></div>

                                    <p className={styles.lastp1}>© {year} . All Rights Reserved.</p>
                                    <p className={styles.lastp2}>System developed by <Link href='https://funnelliner.com/'>Funnel Liner</Link></p>

                                </div>

                            </Container>

                        </Container>

                    </section>



                {/* ================================================================================================
                    Product 
                    ====================================================================================================*/}
                    

                {/* ================================================================================================
                    Product 
                    ====================================================================================================*/}

            </section>

        </>
   )
}

export default Footer