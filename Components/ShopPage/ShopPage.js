import React from 'react'
import styles from '../../styles/theme5/theme5.module.css'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import {BsArrowRightShort} from "react-icons/bs";
import { HiArrowLongRight} from "react-icons/hi2";
import { RiHandbagLine} from "react-icons/ri";
import { AiOutlineEye, AiOutlineHeart} from "react-icons/ai";
import { IoIosArrowBack,IoIosArrowForward} from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosArrowDown } from "react-icons/io";
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';




const ShopPage = () => {

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);

      const handleShow = () => setShow(true);


   return (

    <section className={styles.themeFive}>

           {/* ================================================================================================
                 Our Popular Product  Shop Page
             ====================================================================================================*/}
             {/* <div className={styles.section_gaps2}></div> */}
            <section  className={styles.section_gaps}></section>  
            <div className={styles.ImgRel}>

               <img className={`${styles.ImgAbs} ${styles.ImgAbs2}`} src="img/img1.svg" alt="img" />

            </div>

            <Container>

                    <div className={`${styles.populerBox} ${styles.populerBox2}`}>

                      <h2>Our Popular Product</h2>

                    </div>

            </Container>


            <Container>

                <Row>
                    <Col xs={12} sm={12} md={3} >

                          <div className={styles.ProductCategoreBox}>

                              <h4>PRODUCT CATEGORIES</h4>

                              <div className={styles.hr4}></div>

                              <form action="/action_page.php">

                                  <input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>

                                  <label for="vehicle1"> Hamim fashion </label><br/>

                                  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>

                                  <label for="vehicle2"> NS Fashion</label><br/>

                                  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>

                                  <label for="vehicle3"> Levin </label><br></br>

                                  <input type="checkbox" id="vehicle4" name="vehicle3" value="Boat"/>

                                  <label for="vehicle4"> Levin </label><br></br>

                              </form>

                          </div>

                            {/* filter------- */}
                          
                          <div className={`${styles.ProductCategoreBox} ${styles.ProductCategoreBox1}`}>

                              <h4>FILTER BY PRICE</h4>

                              <div className={styles.hr4}></div>

                              <form action="/action_page.php">

                                <input type="range" id="vol" name="vol" min="0" max="50"/>

                                 <label for="vol">From: BDT 0</label>

                                 <label for="vol">To: BDT 5,121</label>

                              </form>

                          </div>




                         





                      

                    </Col>

                    {/* Main Col----  */}

                    <Col xs={12} sm={12} md={9}>

                          <div className={styles.ProductDetailsTxt}>

                              <div>
                                  <p>We found 1–25 of 56 items for you!</p>
                              </div>   

                                {/*  Next Col */}

                              <div  className={styles.LastMenuBox}>

                                   <div className={styles.midMenuBox}>
                                          <Dropdown>
                                              <Dropdown.Toggle id="dropdown-basic" className={`${styles.DpBtn} ${styles.DpBtn2}`}>

                                                 Sort by: Featured

                                                     <IoIosArrowDown className={styles.DpBtnArr2}></IoIosArrowDown>
                                              </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>

                                                </Dropdown.Menu>
                                          </Dropdown>
                                      </div>                                      


                                     {/* Offcanvas ------------- */}

                                     <>
                                           <Button className={styles.MenubarButton2} onClick={handleShow}>

                                                <img src="img/bar2.svg" alt="bar" />

                                            </Button>


                                            <Offcanvas  className={styles.OffcanvasUlDevMain} show={show} onHide={handleClose}>
                                                <Offcanvas.Header closeButton>
                                                <Offcanvas.Title>  
                                             <div>
                                                <img src="img/logo.svg" alt="img"/>
                                            </div>
                                            </Offcanvas.Title>
                                                </Offcanvas.Header>
                                                <Offcanvas.Body>
                                                     <div className={styles.OffcanvasUlDev}>
                                                        <ul>
                                                            <li><Link href="#">Men's Wear</Link></li>      
                                                            <li><Link href="#">Women Wear</Link></li>
                                                            <li><Link href="#">Kid's Wear</Link></li>
                                                            <li> <Link href="#">Accessories</Link></li>
                                                            <li><Link href="#">Casual Shoes</Link></li>      
                                                            <li><Link href="#">Dresses & Skirts</Link></li>
                                                            <li><Link href="#">View All</Link></li>
                                                            <li> <Link href="#">Contact Us</Link></li>
                                                        </ul>

                                                     </div>



                                                </Offcanvas.Body>
                                            </Offcanvas>
                                        </>






                              </div>   


                             
                          </div>



                        <Row>

                            <Col xs={6} md={6} lg={4}>
                                  <div className={styles.CardBox}>
                                    <div className={styles.CardBoxAbs}>
                                      <div className={styles.CardBoxAbsIcon1}><Link href="#">< AiOutlineEye /></Link></div>
                                      <div className={styles.CardBoxAbsIcon2}><Link href="#"><AiOutlineHeart /></Link></div>

                                    </div>

                                    <img src="img/img10.png" alt="img" />
                                    <div className={styles.CardTxt}>
                                        <h5> Jacket, Women</h5>
                                        <h3> Women Long Jacket</h3>
                                        <h4> $67 <span> $48 </span></h4>
                                        <Link href='#' className={`${styles.bg} ${styles.AllProButt3} `}><RiHandbagLine/> Add to Cart </Link>
                                    </div>
                                  </div>
                            </Col>
                      

                            <Col xs={6} md={6} lg={4}>
                                  <div className={styles.CardBox}>
                                    <div className={styles.CardBoxAbs}>
                                      <div className={styles.CardBoxAbsIcon1}><Link href="#">< AiOutlineEye /></Link></div>
                                      <div className={styles.CardBoxAbsIcon2}><Link href="#"><AiOutlineHeart /></Link></div>

                                    </div>

                                    <img src="img/img11.png" alt="img" />
                                    <div className={styles.CardTxt}>
                                        <h5> Jacket, Women</h5>
                                        <h3> Women Long Jacket</h3>
                                        <h4> $67 <span> $48 </span></h4>
                                        <Link href='#' className={`${styles.bg} ${styles.AllProButt3} `}><RiHandbagLine/> Add to Cart </Link>
                                    </div>
                                  </div>
                            </Col>
                      

                            <Col xs={6} md={6} lg={4}>
                                  <div className={styles.CardBox}>
                                    <div className={styles.CardBoxAbs}>
                                      <div className={styles.CardBoxAbsIcon1}><Link href="#">< AiOutlineEye /></Link></div>
                                      <div className={styles.CardBoxAbsIcon2}><Link href="#"><AiOutlineHeart /></Link></div>

                                    </div>

                                    <img src="img/img12.png" alt="img" />
                                    <div className={styles.CardTxt}>
                                        <h5> Jacket, Women</h5>
                                        <h3> Women Long Jacket</h3>
                                        <h4> $67 <span> $48 </span></h4>
                                        <Link href='#' className={`${styles.bg} ${styles.AllProButt3} `}><RiHandbagLine/> Add to Cart </Link>
                                    </div>
                                  </div>
                            </Col>
                      

                            <Col xs={6} md={6} lg={4}>
                                  <div className={styles.CardBox}>
                                    <div className={styles.CardBoxAbs}>
                                      <div className={styles.CardBoxAbsIcon1}><Link href="#">< AiOutlineEye /></Link></div>
                                      <div className={styles.CardBoxAbsIcon2}><Link href="#"><AiOutlineHeart /></Link></div>

                                    </div>

                                    <img src="img/img13.png" alt="img" />
                                    <div className={styles.CardTxt}>
                                        <h5> Jacket, Women</h5>
                                        <h3> Women Long Jacket</h3>
                                        <h4> $67 <span> $48 </span></h4>
                                        <Link href='#' className={`${styles.bg} ${styles.AllProButt3} `}><RiHandbagLine/> Add to Cart </Link>
                                    </div>
                                  </div>
                            </Col>
                      

                            <Col xs={6} md={6} lg={4}>
                                  <div className={styles.CardBox}>
                                    <div className={styles.CardBoxAbs}>
                                      <div className={styles.CardBoxAbsIcon1}><Link href="#">< AiOutlineEye /></Link></div>
                                      <div className={styles.CardBoxAbsIcon2}><Link href="#"><AiOutlineHeart /></Link></div>

                                    </div>

                                    <img src="img/img14.png" alt="img" />
                                    <div className={styles.CardTxt}>
                                        <h5> Jacket, Women</h5>
                                        <h3> Women Long Jacket</h3>
                                        <h4> $67 <span> $48 </span></h4>
                                        <Link href='#' className={`${styles.bg} ${styles.AllProButt3} `}><RiHandbagLine/> Add to Cart </Link>
                                    </div>
                                  </div>
                            </Col>

                            <Col xs={6} md={6} lg={4}>
                                  <div className={styles.CardBox}>
                                    <div className={styles.CardBoxAbs}>
                                      <div className={styles.CardBoxAbsIcon1}><Link href="#">< AiOutlineEye /></Link></div>
                                      <div className={styles.CardBoxAbsIcon2}><Link href="#"><AiOutlineHeart /></Link></div>

                                    </div>

                                    <img src="img/img15.png" alt="img" />
                                    <div className={styles.CardTxt}>
                                        <h5> Jacket, Women</h5>
                                        <h3> Women Long Jacket</h3>
                                        <h4> $67 <span> $48 </span></h4>
                                        <Link href='#' className={`${styles.bg} ${styles.AllProButt3} `}><RiHandbagLine/> Add to Cart </Link>
                                    </div>
                                  </div>
                            </Col>

                       </Row>

                    </Col>




                </Row>
            </Container>


            
                {/* ================================================================================================
                   Popular Product Banner-2 
                ====================================================================================================*/}
                                
              <section className={styles.BannerConSec}>
                
                <Container fluid className={styles.BannerConPad}>

                  <Row>

                      <Col xs={12} md={4}>

                          <div className={styles.Banner2CardBox}>
                              <img src='img/img17.png' alt="Img"></img>
                                <div  className={styles.Banner2CardText}>
                                    <p>WOMEN</p>
                                    <h3>Fresh Summer With <br/>Just $200.99</h3>
                                    <Link href="#">SHOP NOW</Link>
                                    <div className={styles.hr}> </div>
                                </div>
                          </div>

                      </Col>


                      {/* Col Mid1*/}

                      <Col xs={12} md={4}>
                          <Row>

                              <Col xs={12}>
                                  
                                  <div className={styles.Banner2CardBox}>
                                      <img src='img/img18.png' alt="Img"></img>
                                        <div  className={styles.Banner2CardText}>
                                            <p>20% off</p>
                                            <h3>Season    <br/>Discount  </h3>
                                            <Link href="#">SHOP NOW</Link>
                                            <div className={styles.hr}></div>
                                        </div>
                                  </div>
                            
                              </Col>

                              <div className={styles.PaddingBotm}></div>

                                {/* Col Mid2*/}

                                <Col xs={12}>
                                    
                                    <div className={styles.Banner2CardBox}>
                                        <img src='img/img19.png' alt="Img"></img>
                                          <div  className={styles.Banner2CardText}>
                                              <p>Seasonal Sale</p>
                                              <h3>Up To Breads <br/>50% Off</h3>
                                              <Link href="#">SHOP NOW</Link>
                                              <div className={styles.hr}> </div>
                                          </div>
                                    </div>

                                </Col>
                          </Row>
                      </Col>

                      {/* Col */}

                      <Col xs={12} md={4}>
                            
                          <div className={styles.Banner2CardBox}>
                              <img src='img/img20.png' alt="Img"></img>
                                <div  className={styles.Banner2CardText}>
                                    <p>Man</p>
                                    <h3>Fashion  <br/>Collection - 2023</h3>
                                    <Link href="#">SHOP NOW</Link>
                                    <div className={styles.hr}> </div>
                                </div>
                          </div>
                          

                      </Col>
                    
                  </Row>
                </Container>

              </section>    



              <section  className={styles.section_gaps}></section>      

           {/* ================================================================================================
                 Our Popular Product
             ====================================================================================================*/}



             
           {/* ================================================================================================
                 Our Popular Product
             ====================================================================================================*/}




             
           {/* ================================================================================================
                 Our Popular Product
             ====================================================================================================*/}


    </section>
  )
}

export default ShopPage