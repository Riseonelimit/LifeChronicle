/* eslint-disable react/prop-types */
import parse from 'html-react-parser';
import React from 'react';

const Note = ({noteData}) => {

  return (
    <>
        <h1 className=" md:text-[1.5rem] lg:text-[3rem] inter font-[400] bg-gradient-to-tl dark:from-red-600 dark:to-orange-400  from-yellow-400 to-orange-400  text-transparent bg-clip-text ">
              {noteData? noteData.title : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, architecto`}
            </h1>
            <div className="flex-container gap-5 w-full self-center h-full mt-5 overflow-y-auto  ">
              <p className="  md:text-[0.7rem] lg:text-[1.2rem] leading-[2.5em] md:font-extralight lg:font-normal  dark:text-slate-200  w-full h-full cont">
                
                {noteData? parse(noteData.content) :

                `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae ad esse repellendus harum dolore modi
                exercitationem, deleniti molestias ea quia? Odit necessitatibus
                officia ipsum tempora! Illo quos ut officia labore consequuntur
                sunt, rerum ducimus, animi perferendis, consectetur vero quam at
                maiores iste laboriosam tenetur enim! Rem esse dignissimos
                aliquid labore amet eius maxime ullam ipsam voluptates ut.
                Excepturi fugit exercitationem minima facere delectus maiores
                sapiente sunt nisi ipsum facilis dolor ducimus porro, veniam
                voluptates eligendi culpa quae, rem, magnam debitis a error
                possimus? Nesciunt deserunt quod quisquam perspiciatis magni,
                sit ab quia explicabo dolor vero magnam quae nihil debitis
                velit. Veritatis, dolorum? Ipsa fugit maxime corrupti. Est quos
                quasi a nisi similique odit quo itaque odio voluptatem eum
                cumque modi consequuntur unde ut provident esse quae, deleniti
                fugit accusantium doloribus magnam fugiat! Explicabo provident
                optio voluptatibus a blanditiis, aliquid, quisquam, eligendi
                aliquam tempora quod itaque nulla facere? Veritatis autem,
                molestias fugit dolorum perspiciatis omnis quasi harum
                assumenda? Accusantium id quos consequatur. Ducimus neque
                mollitia corporis odio quis voluptate quibusdam cum ipsa
                incidunt porro ratione, illo soluta, accusantium repudiandae
                cumque voluptatum! Asperiores dolores consequuntur explicabo,
                ipsa laborum aliquid odio quidem accusantium facilis autem
                voluptate cumque assumenda nisi ipsam, reiciendis earum
                consectetur.s Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Maxime assumenda eius fugiat earum quod
                cupiditate fuga deleniti molestiae quae amet error deserunt
                dignissimos minima, aperiam consequuntur ipsam nostrum est
                soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nobis, aut? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Soluta reiciendis cupiditate accusantium possimus eaque
                fugit nam ipsa? Quo quasi veritatis atque libero perferendis
                distinctio consequatur laudantium voluptatum eius et, eligendi
                delectus aperiam quibusdam accusamus mollitia, a, odit facilis
                vel explicabo iusto hic facere! Rem reprehenderit vel explicabo
                impedit dolorum, odio blanditiis, autem, expedita nihil eveniet
                sit repudiandae eligendi assumenda. Tempora sed esse
                reprehenderit corrupti aliquam! Pariatur earum expedita
                consequatur dolorum amet sit odio perspiciatis aperiam? Sequi
                tempore vel facere dolores? Dolore culpa ipsum ea dolorum eos!
                Recusandae quasi quae incidunt laboriosam esse consectetur, illo
                nemo asperiores, adipisci, aut earum excepturi aliquid neque
                beatae labore. Nam soluta incidunt voluptate ab eligendi nobis
                at maxime officia pariatur quo deserunt asperiores accusamus qui
                doloremque ipsam iste est possimus, atque quibusdam! Tenetur
                pariatur non corrupti voluptates accusantium reprehenderit
                earum, dolorem minima quam explicabo laudantium excepturi eius
                perspiciatis possimus mollitia id corporis delectus sapiente
                optio aperiam ipsa itaque tempore. Obcaecati quia, labore qui
                minima quo perspiciatis at doloremque, corrupti velit porro
                similique quam earum reprehenderit eveniet mollitia ratione, est
                vitae ex vero asperiores perferendis! Unde earum magni maxime
                minus praesentium, aspernatur dignissimos dolorem quam quae.
                Pariatur eveniet repellendus aut quaerat eos? Quaerat quidem
                officia ut!`}
              </p>
            </div>
    </>
  )
}

export default Note