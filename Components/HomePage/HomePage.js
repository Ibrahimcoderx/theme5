import React,{useRef, useState} from 'react'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '../../styles/theme5/theme5.module.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {BsArrowRightShort} from "react-icons/bs";
import { HiArrowLongRight} from "react-icons/hi2";
import { RiHandbagLine} from "react-icons/ri";
import { AiOutlineEye, AiOutlineHeart} from "react-icons/ai";
import { IoIosArrowBack,IoIosArrowForward} from "react-icons/io";


// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,} from "swiper";

// import "./styles.css";
// import * as ReactDOM from 'react-dom';





const HomePage = () => {

  const swiperRef = useRef();    


  // const [active, setActive] = useState(false);
  //   const handleClick = () => {
  //     setActive(!active);
  //   };
 
  //   const [buttonClick, setButtonClick]=useState(false)

  //   const MyHandleClick = () => {
  //     setButtonClick(true)
  //   }; 


  return (



    <>
      <section className={styles.themeFive}>

            {/* ================================================================================================
                 Slider
                ====================================================================================================*/}
                 
                 <div className={styles.ImgRel}>
                        <img className={styles.ImgAbs} src="img/img1.svg" alt="img" />
                  </div>

                    <section  className={styles.section_gaps}></section>  

                {/* section gap */}

                <section className={styles.SliderSec}>
                  <img className={styles.SliderImgAbs} src="img/img8.svg" alt="Img" />
                   
                  <Container className={styles.SliderCon}>
                          <Row>

                                <Col xs={7}>
                                    <h4>Browser By Category</h4>
                                </Col>

                              <Col xs={5}>
                                    <div className={styles.SliderConArrDiv}>
                                        <div>

                                            <button className={styles.SliderB1} onClick={() => swiperRef.current?.slidePrev()}>
                                              <IoIosArrowBack  className={styles.icon1}></IoIosArrowBack>
                                            </button>

                                            <button className={styles.SliderB2} onClick={() => swiperRef.current?.slideNext()}>
                                            <IoIosArrowForward className={styles.icon2}></IoIosArrowForward>

                                            </button>

                                        </div>

                                    
                                    </div>
                                </Col>
                              
                          </Row>

                          {/* slider-------------------- */}

                          <Row className={styles.SliderRowgap}>
                
                              <Col lg={12}>
                                
                            
                              <div class="swiper mySwiperProductList">
                
                                <Swiper
                                    slidesPerView={5}
                                    spaceBetween={30}
                                    slidesPerGroup={5}
                                    loop={true}
                                    loopFillGroupWithBlank={true}
                                    pagination={{
                                      clickable: true,
                                    }}
                                    
                                    onBeforeInit={(swiper) => {
                                      swiperRef.current = swiper;
                                    }}
                                    modules={[Pagination, Navigation]}
                                    breakpoints={{
                                      120: {
                                        slidesPerView: 2,
                                        slidesPerGroup: 2,
                                      },
                                      420: {
                                        slidesPerView: 3,
                                        slidesPerGroup: 3,
                                      },
                                      575: {
                                        slidesPerView: 4,
                                        slidesPerGroup: 4,
                                      },
                                
                                      768: {
                                        slidesPerView: 5,
                                        slidesPerGroup: 5,
                                      },
                                      1200: {
                                        slidesPerView: 6,
                                        slidesPerGroup: 6,
                                      },
                                      1360: {
                                        slidesPerView: 7,
                                        slidesPerGroup: 7,
                                      },
                                    }}

                                    
                                    className="mySwiper2"
                                  
                                  >
                                    
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img2.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>
                                        
                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img3.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img4.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img5.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img6.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img7.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img2.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img3.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img4.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img5.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img6.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img7.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img2.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  
                                  
                                    <SwiperSlide>

                                      <Link href="#">
                                            <div className={styles.imgbox}>
                                                <div className={styles.imgborder}>                                              
                                                    <img className={styles.h} src="img/img3.png" alt="Img"/>                                         
                                                </div>
                                            </div>
                                            <h2 className={styles.slidertxtH2}>Men's Wear</h2>
                                            <h3 className={styles.slidertxtH3}>43 Products</h3>
                                        </Link>

                                    </SwiperSlide>
                                  

                                  
                                  
                                
                                
                                </Swiper>
                                    
                                {/* <div class="swiper-pagination"></div>
                                <div class="navbutton">
                                  <div class="swiper-button-prev2"><IoIosArrowForward className='icon1'></IoIosArrowForward></div>
                                  <div class="swiper-button-next2"><IoIosArrowBack className='icon2'></IoIosArrowBack></div>
                                </div> */}
                
                              </div>
                
                              </Col>
                
                          </Row>
                        <div className={styles.ViewAllArrBox1}>
                          <div className={styles.ViewAllArrBox}>
                             <Link href="#">VIEW ALL <BsArrowRightShort/></Link>
                          </div>
                        </div>
                  </Container>

                </section> 

            <section  className={styles.section_gaps}></section>  

            {/* ================================================================================================
                   Popular Product
                ====================================================================================================*/}
           
            <section>
                <Container>
                    <div className={styles.populerBox}>
                      <h2>Our Popular Product</h2>
                      <Link href='#' className={`${styles.bg} ${styles.AllProButt} `}> See All Products <HiArrowLongRight/></Link>
                    </div>
                </Container>

               {/* Card------------------ */}

               <Container>
                  <Row>

                    <Col xs={6} md={4} lg={3}>
                          <div className={styles.CardBox}>
                            <div className={styles.CardBoxAbs}>
                               <div className={styles.CardBoxAbsIcon1}><Link href="#">< AiOutlineEye /></Link></div>
                               <div className={styles.CardBoxAbsIcon2}><Link href="#"><AiOutlineHeart /></Link></div>

                            </div>

                            <img src="img/img9.png" alt="img" />
                            <div className={styles.CardTxt}>
                                <h5> Jacket, Women</h5>
                                <h3> Women Long Jacket</h3>
                                <h4> $67 <span> $48 </span></h4>
                                <Link href='#' className={`${styles.bg} ${styles.AllProButt3} `}><RiHandbagLine/> Add to Cart </Link>
                            </div>
                          </div>
                    </Col>

                    <Col xs={6} md={4} lg={3}>
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

                    <Col xs={6} md={4} lg={3}>
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

                    <Col xs={6} md={4} lg={3}>
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

                    <Col xs={6} md={4} lg={3}>
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

                    <Col xs={6} md={4} lg={3}>
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

                    <Col xs={6} md={4} lg={3}>

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

                    <Col xs={6} md={4} lg={3}>
                          <div className={styles.CardBox}>
                            <div className={styles.CardBoxAbs}>
                               <div className={styles.CardBoxAbsIcon1}><Link href="#">< AiOutlineEye /></Link></div>
                               <div className={styles.CardBoxAbsIcon2}><Link href="#"><AiOutlineHeart /></Link></div>

                            </div>

                            <img src="img/img16.png" alt="img" />
                            <div className={styles.CardTxt}>
                                <h5> Jacket, Women</h5>
                                <h3> Women Long Jacket</h3>
                                <h4> $67 <span> $48 </span></h4>
                                <Link href='#' className={`${styles.bg} ${styles.AllProButt3} `}><RiHandbagLine/> Add to Cart </Link>
                            </div>
                          </div>
                    </Col>

                  </Row>
               </Container>



            </section>       

         

            {/* <section  className={styles.section_gaps}></section>  */}

            {/* ================================================================================================
                   Popular Product Banner-2 
                ====================================================================================================*/}
                
            <section>

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
                 Products of the week
                ====================================================================================================*/}
            <section>

                <Container>


                      {/* Mobile display start---- */}

                    <Row>
                       <Col xs={12}>

                          <div className={styles.LinkBoxMobile}>

                              <Link href="#">Men's Wear</Link>
                              <Link href="#">Women Wear</Link>
                              <Link href="#">Kid's Wear</Link>
                              <Link href="#">Accessories</Link>                   

                          </div>

                        </Col>
                      </Row>

                      <div className={styles.hr3}></div>

                      <Row>

                          <Col xs={7}>
                                <div className={styles.productTheWeekh2_M}>
                                  <h2>Products of the week</h2>
                                </div>
                          </Col>

                          <Col xs={5}>

                            <div className={styles.LinkLast_M}>
                              <Link className={styles.LinkLast1} href="#">View All
                                   <BsArrowRightShort className={styles.LinkLast2}></BsArrowRightShort>
                              </Link>
                            </div>
                         
                          </Col>


                      </Row>



                    {/* Mobile display end---- */}


                  <div className={styles.productTheWeekh2}>
                     <h2>Products of the week</h2>
                  </div>



                <Row>  
                      <Col xs={10}>

                        <div className={styles.LinkBox}>

                            <Link href="#">Men's Wear</Link>
                            <Link href="#">Women Wear</Link>
                            <Link href="#">Kid's Wear</Link>
                            <Link href="#">Accessories</Link>
                            <Link  href="#">Casual Shoes</Link>          
                            <Link  href="#">Dresses & Skirts</Link>

                        </div>

                      </Col>

                      <Col xs={2}>
                        <div className={styles.LinkLast}>
                        <Link className={styles.LinkLast1} href="#">View All
                           <BsArrowRightShort className={styles.LinkLast2}></BsArrowRightShort>
                        </Link>

                        </div>
                         
                      </Col>






                </Row>

                <div className={styles.hr2}></div>

                

                </Container>
            </section>      




            {/* ================================================================================================
                 Products of the week
                ====================================================================================================*/}
            <section className={styles.WomenWear}>
              <Container>

                  <Row>

                    <Col xs={6} md={4} lg={3}>
                          <div className={styles.CardBox}>
                            <div className={styles.CardBoxAbs}>
                               <div className={styles.CardBoxAbsIcon1}><Link href="#">< AiOutlineEye /></Link></div>
                               <div className={styles.CardBoxAbsIcon2}><Link href="#"><AiOutlineHeart /></Link></div>

                            </div>

                            <img src="img/img9.png" alt="img" />
                            <div className={styles.CardTxt}>
                                <h5> Jacket, Women</h5>
                                <h3> Women Long Jacket</h3>
                                <h4> $67 <span> $48 </span></h4>
                                <Link href='#' className={`${styles.bg} ${styles.AllProButt3} `}><RiHandbagLine/> Add to Cart </Link>
                            </div>
                          </div>
                    </Col>

                    <Col xs={6} md={4} lg={3}>
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

                    <Col xs={6} md={4} lg={3}>
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

                    <Col xs={6} md={4} lg={3}>
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

                   
                  </Row>
               </Container>



            </section>       






               
            {/* ================================================================================================
                 Products of the week
                ====================================================================================================*/}
                   
               
            {/* ================================================================================================
                 Products of the week
                ====================================================================================================*/}
                   
               




            {/* ================================================================================================
                  Product 
                ====================================================================================================*/}
                            <section  className={styles.section_gaps}></section>         
              {/* <div>
                  <button onClick={() => alert('hello')}> Alert</button>
                  <button onClick={MyHandleClick} >My Bttton </button>
                  <p className={buttonClick===true?"Paragrap2" : "paragrap"}> I Stay Dhaka</p>
                  <p onClick={handleClick}  style={{ backgroundColor: active ? "black" : "white" }}> I Love Bangladesh</p>
             
              </div> */}

            {/* ================================================================================================
                  Product 
                ====================================================================================================*/}



      </section>

    </>
  )
}

export default HomePage