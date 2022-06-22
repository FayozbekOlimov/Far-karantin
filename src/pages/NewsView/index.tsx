import React from 'react'
import { Col, Row } from 'antd'

import "./style.scss";
import { Link } from 'react-router-dom';

function NewsView() {

  const handlePrint = (elem: any) => {
    var mywindow = window.open('', 'PRINT', 'height=400,width=600')!;

    mywindow.document.write('<html><head><title>' + document.title + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title + '</h1>');
    mywindow.document.write(document.getElementById(elem)!.innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;

  }

  return (
    <section className="news_view main_page">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col md={18}>
            <div className="news_content_card page_card" id="section-to-print">
              <h4 className="news_card_title">
                “O‘zdavkarantin” inspeksiyasi davlat-xususiy sherikchiligi asosida faoliyat yurituvchi “O‘simliklar klinikasi” tashkil etish bo‘yicha tanlov e’lon qiladi
              </h4>
              <div className="news_card_body">
                <figure className='news_img'>
                  <img src="/assets/img/news_img.jpg" alt="new_images" />
                </figure>
                <p className="news_text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, vitae velit? Assumenda numquam optio, quos nemo inventore nulla? Fugiat maxime in consectetur nam consequuntur ea, tenetur tempore esse deleniti excepturi, ut quae, autem enim. Dicta, dolor cumque! Consectetur eaque id nulla consequatur praesentium asperiores unde libero, dolorem adipisci, dolores optio aliquid soluta facilis vero! Placeat at explicabo reiciendis expedita, odit amet et rem? Hic minus repellat asperiores accusamus non molestias aliquam nisi facilis possimus corporis nostrum sapiente earum maiores rem unde, vel modi officia quod eum dolores harum facere laudantium dolor. Maxime, natus iure? Magnam animi nemo sequi culpa iure.
                </p>
                <p className="clear_both"></p>
                <div className="news_footer">
                  <div className="left">
                    <ul>
                      <li>Qo'shildi: <i className="fa-regular fa-clock"></i> 23.11.2018</li>
                      <li><span onClick={() => handlePrint("section-to-print")}><i className="fa fa-print"></i> Chop etish</span></li>
                      <li><i className="fa-regular fa-ieye"></i> Ko'rishlar: 1793</li>
                    </ul>
                  </div>
                  <div className="right">
                    <p>Bo'lishmoq</p>
                    <ul><li>

                    </li></ul>
                  </div>
                </div>
              </div>
            </div>

          </Col>
          <Col md={6}>
            <div className="popular_news">
              <h4 className="popular_news_title">
                Популярные
              </h4>

              <Link to={"/"} className="popular_news_link">
                <h5 className="news_title">
                  Иссиқхонада помидор-бодринг етиштириш учун нималарни билиш зарур?
                </h5>
                <span><i className="fa-regular fa-clock"></i> 11.06.2020</span> <span><i className="fa-regular fa-ieye"></i> 3642</span>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default NewsView