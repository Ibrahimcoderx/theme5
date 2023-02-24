import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '../../../styles/theme5/theme5.module.css'
import { CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineBars3CenterLeft} from "react-icons/hi2";
import { AiFillStar,AiOutlineShoppingCart} from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';





const Menubar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
        <>
            <section className={styles.themeFive}>

                {/* ================================================================================================
                    Menubar1
                    ====================================================================================================*/}   
                <section>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <div className={styles.MenubarDiv}>

                                    <div className={styles.MenubarImg}>
                                        <img src="img/logo.svg" alt="img"/>
                                    </div>

                                         {/* Mid Menu---------------------------------- */}

                                    <div className={styles.midMenuDiv}>
                                    
                                               

                                                <div className={styles.midMenuBox}>
                                                    <Dropdown>
                                                            <Dropdown.Toggle id="dropdown-basic" className={styles.DpBtn}>
                                                             All Category

                                                                <IoIosArrowDown className={styles.DpBtnArr}></IoIosArrowDown>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Men's Wear</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Women Wear</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-3">Kid's Wear</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Accessories</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-3">Casual Shoes</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>

                                             <div className={`${styles.midMenuBox} ${styles.midMenuBox5}`}>
                                                <span className={styles.spanDivider}></span>
                                                <input className={styles.inputBtn} type="text" placeholder="I'm shopping for..."/>
                                                <span className={styles.searchBox}>
                                                   <CiSearch className={styles.searchBtn}></CiSearch>
                                                </span>
                                             </div>
                                              
                                         
                                    </div>

                                    {/* right Menu---------------------------------- */}

                                    <div className={styles.Menu1IconBox}>
                                        <Link href="#">
                                             <BiUser className={styles.Menu1Icon1}></BiUser>
                                        </Link>

                                        <Link href="#">
                                             <AiOutlineHeart className={styles.Menu1Icon2}></AiOutlineHeart>
                                        </Link>

                                         <span className={styles.textSpanTop}>2</span>

                                         <Link href="#">
                                                <FiShoppingCart className={styles.Menu1Icon3}></FiShoppingCart>
                                         </Link>

                                         <span className={styles.textSpanTop}>22</span>

                                      
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>   
                


                {/* ================================================================================================
                    Menubar2
                    ====================================================================================================*/}  

                <section  className={styles.MenubarSec}>
                  <Container fluid className={styles.Menubar2Flu}>
                    <Container>
                        <Row >
                            <Col>
                                <div className={styles.Menubar2}>

                                    {/* Mobile------------------------- start */}

                                         {/* Offcanvas ------------- */}

                                        <div className={styles.OffcanvasMobile}>
                                            
                                            <Button className={styles.MenubarButton} onClick={handleShow}>
                                                <img src="img/bar.svg" alt="bar" />
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
                                                            <li><Link href="#">Contact Us</Link></li>

                                                        </ul>

                                                     </div>



                                                </Offcanvas.Body>
                                            </Offcanvas>
                                        </div>





                                        {/* Mid Menu--  start*/}
                                        
                                        {/* Search dev */}

                                        <div className={`${styles.midMenuDiv} ${styles.midMenuDiv1}`}>
                                        
                                                

                                                    <div className={styles.midMenuBox}>
                                                        <Dropdown>
                                                                <Dropdown.Toggle id="dropdown-basic" className={styles.DpBtn}>
                                                                All Category

                                                                    <IoIosArrowDown className={styles.DpBtnArr}></IoIosArrowDown>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>

                                                <div className={`${styles.midMenuBox} ${styles.midMenuBox5}`}>
                                                    <span className={styles.spanDivider}></span>
                                                    <input className={styles.inputBtn} type="text" placeholder="I'm shopping for..."/>
                                                    <span className={styles.searchBox}>
                                                    <CiSearch className={styles.searchBtn}></CiSearch>
                                                    </span>
                                                </div>
                                                
                                            
                                        </div>


                                    {/* Mobile--- end */}



                  

                                    <div className={styles.Menubar2Left}>

                                        {/* Offcanvas ------------- */}

                                        <>
                                            <Button className={styles.MenubarButton} onClick={handleShow}>
                                            <HiOutlineBars3CenterLeft  className={styles.MenubarBar}></HiOutlineBars3CenterLeft>
                                            <Link href="#"> ALL CATEGORIES </Link>
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
                                     
                                    <div className={styles.Menubar2Mid}>
                                        <ul>
                                            <li  className={styles.dropdown}>
                                               <Link href="#">Home</Link>
                                               <div className={styles.dropdownItems}>
                                                    <ul>

                                                            <li><Link href="#">Men's Wear</Link></li>
                                                            <li><Link href="#">Kid's Wear</Link></li>
                                                            <li> <Link href="#">Accessories</Link></li>
                                                            <li> <Link className={styles.lastli} href="#">Casual Shoes</Link></li>

                                                    </ul>
                                               </div>
                                            </li>
                                            <li><Link href="#">About Us</Link></li>
                                            <li><Link href="#">Category</Link></li>
                                            <li> <Link href="#">Contact Us</Link></li>
                                           
                                        </ul>
                                    </div>

                                    <div className={styles.Menubar2Right}>
                                        <BsTelephone className={styles.Menubar2RightIcon}></BsTelephone>
                                        <Link href="#" >HOTLINE (42) 500-78-42</Link>

                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                  </Container>
                </section>


                {/* ================================================================================================
                    Banner Bg
                    ====================================================================================================*/}   
                <section>
                    <Container fluid className={styles.BgImgCon} >
                        <div className={styles.BgImg}>         
                            <Container>
                                <Row>
                                    <Col xs={7} sm={5}>
                                        <div className={styles.BgContent}>
                                            <h4>New Arrival</h4>
                                            <h1>Winter Offer 2023 Collection </h1>
                                            <p>Competently expedite alternative benefits whereas leading-edge
                                                catalysts for change. Globally leverage existing an expanded array of leadership.</p>
                                            <h3>$190.00  <span> $250.00</span></h3>
                                            <div><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>  <AiFillStar/></div>
                                            <Link href='#' className={styles.bg}> <AiOutlineShoppingCart/> Shop Now</Link>
                                        </div>

                                    </Col>

                                    {/* Col--2 */}

                                    <Col xs={5} sm={7}>
                                        <div className={styles.CircleBox}>
                                            <img src="img/img.svg/" alt="img" />
                                            <span>30</span>
                                        </div>
                                   
                                    </Col>

                                </Row>
                            </Container>
                        </div>
                    </Container>
                </section>



                {/* ================================================================================================
                    Slider
                    ====================================================================================================*/}   
{/*               
                    <div className={styles.ImgRel}>
                        <img className={styles.ImgAbs} src="img/img1.svg" alt="img" />
                    </div>

             
                <section  className={styles.section_gaps}></section>  

                <section>
                   
                    <Container className={styles.SliderCon}>
                            <Row>
                                <Col xs={6}>
                                    <h4>Browser By Category</h4>
                                </Col>
                                <Col xs={6}>
                                    <div className={styles.SliderConArrDiv}>
                                        <Link href="#" className={styles.SliderConArr1}><MdKeyboardArrowLeft /></Link>
                                        <Link href="#" className={styles.SliderConArr2}><MdKeyboardArrowRight /></Link>
                                    </div>
                                </Col>
                              
                            </Row>
                       
                    </Container>

                </section> */}



                {/* ================================================================================================
                    Product 
                    ====================================================================================================*/}   




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

export default Menubar