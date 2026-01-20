import React, { useRef } from 'react';
import bgImage from '../assets/bgImage4.png';
import Alessandro from '../assets/aleNew.png';
import bgPattern from '../assets/bgPattern.webp';
import Valentina from '../assets/valeNew.png';
import Federica from '../assets/fedeNew.png';
import Arturo from '../assets/arturoNew.jpg';


const imgItems1 = [
  {
    name: "Avv. Alessandro Randazzo",
    img: Alessandro,
    active: true,
    description: 
    `
    FOUNDING PARTNER

    Nato a Milano nel 1988 e laureato a pieni voti in Giurisprudenza nel marzo 2013 all’Università degli Studi di Milano. Supera l'esame di abilitazione alla professione forense nell'anno 2015. Nell'anno accademico 2016-2017 partecipa al corso di perfezionamento e alta specializzazione in "La responsabilità da reato degli Enti Collettivi ex D. Lgs. 231/2001", presso l'Università Statale di Milano. E’, inoltre, iscritto nelle liste dei difensori d’ufficio dal 2020 e nell’elenco degli avvocati abilitati al patrocinio a spese dello Stato dal 2018. Formatosi professionalmente all’interno di primari Studi legali milanesi (Studio Penalisti Associati; MDS Legal Tax; Puccio Penalisti Associati), nel 2024 fonda lo studio legale PSVR con i Colleghi Arturo Pinchetti, Federica Strada e Valentina Vigliotti. All’interno dello Studio fornisce consulenza ed assistenza, ad aziende e privati, nell’ambito del diritto penale (classico e d’impresa) e della compliance aziendale ex D. Lgs. 231/2001, materie nelle quali ha maturato una rilevante esperienza giudiziale e stragiudiziale nel corso degli anni di attività professionale.
    
    Formazione: Università degli Studi di Milano. Laurea Magistrale in Giurisprudenza, marzo 2013.
    Abilitazione: Iscrizione all’Albo degli Avvocati di Milano dal gennaio 2016.
    Lingue: Italiano, Inglese.
    `,
  },
  {
    name: "Avv. Valentina Vigliotti",
    img: Valentina,
    active: true,
    description: 
    `
    FOUNDING PARTNER

    Nata a Monza nel 1991 e laureata a pieni voti in Giurisprudenza nel 2015 presso l’Università degli Studi Milano – Bicocca. Nel 2022 partecipa ad un corso di formazione in materia GDPR. Negli anni 2023 – 2024 frequenta il corso sul modello organizzativo e di controllo ex D.lgs. n 231/2001, aggiornamento dopo la riforma Cartabia tenuto da Altalex. Nel 2024, fonda lo studio PSVR con i colleghi Arturo Pinchetti, Federica Strada e Alessandro Randazzo. All’interno dello studio si occupa del diritto civile, recupero crediti e del relativo contenzioso scaturente in ambito giudiziale e stragiudiziale. Esperta in Privacy, con svolgimenti di incarichi in qualità di DPO, nonché in materia ex D. Lgs. n. 231/2001.
    
    Formazione: Università degli Studi di Milano - Bicocca. Laurea Magistrale in Giurisprudenza, 2015.
    Abilitazione: Iscrizione all’Albo degli Avvocati di Milano dal 2021.
    Lingue: Italiano, Inglese.
    `,
  }
];

const imgItems2 = [
  {
    name: "Avv. Arturo Pinchetti",
    img: Arturo,
    active: true,
    description:
    `
    FOUNDING PARTNER

    Nato a Milano nel 1988 e laureato in Giurisprudenza nel 2013. Dal 2022 collabora, in qualità di esperto esterno, con la facoltà di Giurisprudenza dell’Università degli Studi di Milano – dipartimento di diritto romano. Nel 2024, fonda lo studio PSVR con i Colleghi Federica Strada, Valentina Vigliotti e Alessandro Randazzo. Negli anni ha maturato una rilevante esperienza giudiziale e stragiudiziale ed offre assistenza ad aziende e privati in diverse aree giuridiche (diritto immobiliare, diritto condominiale, Assicurazioni & responsabilità civile, Recupero crediti, consulenza 231 e privacy).
    
    Formazione:  Università degli Studi di Milano. Laurea Magistrale in Giurisprudenza, 2013.
    Abilitazione: Iscrizione all’Albo degli Avvocati di Milano dal gennaio 2017.
    Lingue: Italiano, Inglese.
    `,
  },
  {
    name: "Avv. Federica Strada",
    img: Federica,
    active: true,
    description:
    `
    FOUNDING PARTNER

    Nata a Milano nel 1988 e laureata a pieni voti in Giurisprudenza nel 2013 all'Università degli Studi di Milano. Supera l'esame di abilitazione alla professione forense nell'anno 2015. Nell'anno accademico 2015-2016 partecipa al corso di perfezionamento e alta specializzazione in discipline lavoristiche presso l’Università degli Studi di Milano. Negli anni 2023 e 2024 frequenta il corso sul modello organizzativo e sull'organismo di vigilanza ex D. Lgs. 231/2001 dopo la riforma Cartabia tenuto da Altalex Formazione. Nel 2024, fonda lo studio PSVR con i Colleghi Arturo Pinchetti, Valentina Vigliotti e Alessandro Randazzo. All'interno dello Studio si occupa di consulenza e assistenza nella gestione del rapporto di lavoro e del relativo contenzioso, sia stragiudiziale che giudiziale.
    
    Formazione: Università degli Studi di Milano. Laurea Magistrale in Giurisprudenza, 2013.
    Abilitazione: Iscrizione all’Albo degli Avvocati di Milano dal 2015.
    Lingue: Italiano, Inglese.
    `,
  }
];

function Home() {
  const descriptionRefs = useRef([]);

  const scrollToDescription = (index) => {
    if (descriptionRefs.current[index]) {
      descriptionRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='w-full' style={{ background: '#2F3F5C' }}>
      <div
        className="py-10 shadow-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div>
        <ul className='flex flex-wrap justify-center space-x-60 py-10 mt-20 list-none'>
          {imgItems1.map((item, index) => (
            <li key={item.name} className="mb-6">
              <p className='flex justify-center'>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className='rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-80 lg:h-80 object-cover' 
                />
              </p>
              <p className='text-orange-200 flex justify-center text-lg py-4'>
                <button
                  onClick={() => scrollToDescription(index)}
                  className='px-6 py-2 duration-200 hover:bg-gray-500 rounded-full text-orange-200'
                >
                  {item.name}
                </button>
              </p>
            </li>
          ))}
        </ul>

        <ul className='flex flex-wrap justify-center space-x-60 py-10 list-none mb-10'>
          {imgItems2.map((item, index) => (
            <li key={item.name} className="mb-6">
              <p className='flex justify-center'>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className='rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-80 lg:h-80 object-cover' 
                />
              </p>
              <p className='text-orange-200 flex justify-center text-lg py-4'>
                <button
                  onClick={() => scrollToDescription(index + imgItems1.length)}
                  className='mb-4 px-6 py-2 duration-200 hover:bg-gray-500 rounded-full text-orange-200'
                >
                  {item.name}
                </button>
              </p>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Render each person’s description */}
      {[...imgItems1, ...imgItems2].map((item, index) => (
        <div
          key={item.name}
          ref={(el) => (descriptionRefs.current[index] = el)}
          className="bg-white text-2xl text-left py-10 text-gray-500 px-20"
        >
          <h2 className="text-3xl font-bold">{item.name}</h2>
          <div className='bg-white flex items-start'>
            <img src={item.img} alt="Error" className="w-80 h-80 py-8 object-cover" />
            <p className='bg-white px-16 flex-grow' style={{ whiteSpace: 'pre-line' }}>
              {item.description}
            </p>
          </div>
          <div className='mt-10 py-10' style={{backgroundImage: `url(${bgPattern})`}}></div>
        </div>
      ))}
    </div>
  );
}

export default Home;
