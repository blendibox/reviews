//import Image from 'next/image'
import Image from '../components/Image.js'
import styles from '../styles/Home.module.css'
import data from '../components/data.json'
import { parse } from 'node-html-parser'
import Moment from "react-moment";


//export const config = { amp: true }

 function  Home(props) {

  var ia = 3;


   //console.log(data);




  return (


 <div key={ia++} className="flex min-h-screen flex-col items-center justify-center py-2">


<main className="flex w-full flex-1 flex-col items-center  px-20">

<div key={ia++} className="container mx-auto px-4">

  <div key={ia++} className="flex items-center space-x-4">
   <h1 className="logo w-48 sm:w36" >
      <a className="flex-none  " href="https://www.blendibox.com.br/" title="Blendibox - Comprar Moda Online" >          
            <img width="200" height="45" className="" src="https://cdn.awsli.com.br/400x300/1985/1985921/logo/fe34120478.png" alt="Blendibox - Comprar Moda Online"/>            
      </a>
    </h1>
    <h1 className="flex-auto sm:text-1xl md:text-3xl font-bold text-center  text-clifford  place-items-stretch">
   Reviews de nosso Clientes na <a href="https://shopee.com.br/buyer/348055095/rating"  title='cilque para visualizar na shopee' className='underline'>Shopee</a>
  </h1>
</div>


<div key={ia++} className="mt-5 -mb-3" >
   <div key={ia++} className="space-x-4" >
    <ul className="grid md:grid-cols-4 sm:grid-cols-1  gap-4 h-56 gap-4 ">


        {data.map((review, id) =>


          <li key={ia++} className="text-sm leading-6 place-content-stretch  rounded-lg p-6 bg-white border hover:border-gray-200 shadow-md hover:shadow-xl">

            <div key={ia++} className="relative flex flex-col-reverse  dark:bg-slate-800 dark:highlight-white/5 ">           
              <div key={ia++} className="mt-6 text-slate-700 dark:text-slate-300 ">
                <p className="text-lg font-tiny text-ellipsis">
                   {review.Description} 
                </p>
               

                <div key={ia++} className="text-sm font-tiny text-ellipsis" >

                {
                      
                   parse(review.Text, "text/html").childNodes.map((av, i)=>
         
                         <div key={ia++}  className=" text-center font-semibold mt-4">“{av.text}”</div>
                         
                    )

                }
                </div>
                 <div key={ia++} className="mt-5 text-sm font-tiny text-ellipsis" >
                {
                      
                   parse(review.Tags, "text/html").childNodes.map((tag, i)=> 
                         <div key={ia++} className="flex items-center space-x-4" >
                         <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/18/000000/external-check-banking-and-finance-kiranshastry-gradient-kiranshastry.png"/>
                          <div className="font-semibold">{tag.text} </div>
                        </div>
                    )

                }
                </div>
                <blockquote className="h-48" >
                  <figcaption key={ia++}  className="mt-5  flex items-center space-x-4  text-xs font-tiny text-ellipsis"  > 
                 
                       
                     {
                       parse(review.Products).childNodes.map((product, i)=>
                       product.rawTagName == 'img' ?   

                      
                           <img alt="produto"  key={ia++} src={product.getAttribute('src')}  width="250" height="250"
                             className="flex-none w-20 h-20  relative contrast-125"  /> 
                        
                      
                        :  <div key={ia++} className="text-ellipsis overflow-hidden"> {product.text}  </div>                            
                    )  
                     }

                      
                  </figcaption> 
                </blockquote>
             </div> 

            <div key={ia++} className="flex items-center space-x-4">            
                 
                   {(() => {

                    if (review.Avatar == "") {
                        return (
                           <img alt="avatar" className="contrast-125 flex-none w-14 h-14 rounded-full object-cover" width="50" height="50"
                            src="https://img.icons8.com/cotton/64/000000/user-male-circle.png" />
                        )
                      } else {
                       return (
                         <img alt="avatar" className="contrast-125 flex-none w-14 h-14 rounded-full object-cover" width="50" height="50"
                            src={review.Avatar} />
                         
                        )
                      }

                    })()}
                
               
           <div key={ia++} className="flex-auto">
              <div key={ia++} className="text-base text-slate-900 font-semibold dark:text-slate-300"> 
                <div key={ia++} className="absolute inset-0"></div>
                  {review.Name}  
              </div> 
              <div key={ia++} className="flex-auto">
               <div key={ia++} className="w-20 h-3 grid grid-cols-5 gap-1">
                {
                     parse(review.Rating).childNodes.map((tag, i)=>
                           
  <svg key={ia++} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
  </svg>
                            
                    ) 

                }
                
              </div>   
                </div>        
              <div key={ia++} className="mt-0.5 font-tiny">  
             

              {
                 parse(review.DateTime).childNodes.map((dtm, i)=>
                           <div key={ia++} >
                                <Moment format="DD/MM/YYYY - hh:mm a">
                                 {dtm.text}
                                </Moment>
                           </div>
                    )
              }
            
              </div>   
              </div>        
            </div>  
          </div> 

         </li>


        )}


    </ul>
  </div>
</div>

</div>


      </main>


    </div>
  )
}




export default Home
