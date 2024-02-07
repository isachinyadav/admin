import React, { useEffect, useState } from 'react'
import "../component/home.css";
import img from"../Assests/img.png";
import { Link } from 'react-router-dom';
import Table from './Table';
import axios  from 'axios';
const Home = () => {

  const [data , setData] = useState([]);
  
  const fetchCRMData = async ()=>{
    try{
      const res = await axios.get(
        "https://crm.voyagerstales.com/leads/leadsummary",{
          headers:{
            Authorization:"Token  9522aa765467b9c0c0301fc3c465ae6ffab8741c"
          }
        }

      )
      setData(res.data);

    } catch (err){
      console.log(err);
    }
  }

     useEffect(()=>{
      
      fetchCRMData();
     },[])
     console.log(data);


  const handleHome=()=>{
      let  hide = document.querySelector('.hide');
       hide.style.display = "block"; 
     }
     const handleLeads=()=>{
      let  hide = document.querySelector('.hide');
       hide.style.display = "none"; 
     

     }

  return (
    <div className='home'>
        <div className='sidebar'>

        <img src={img} alt='logo' className='logo'/>
        <div className='buttons' >

      <button className='btn m' onClick={handleHome}> <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.14125 0.57703C7.37334 0.357609 7.68061 0.235352 8 0.235352C8.31939 0.235352 8.62666 0.357609 8.85875 0.57703L14.9137 6.30078C15.2888 6.65453 15.5 7.14828 15.5 7.66328V14.6258C15.5 15.1231 15.3025 15.6 14.9508 15.9516C14.5992 16.3032 14.1223 16.5008 13.625 16.5008H11.125C10.8787 16.5008 10.6347 16.4522 10.4072 16.3579C10.1796 16.2636 9.97286 16.1254 9.79873 15.9512C9.62461 15.7769 9.48652 15.5701 9.39237 15.3424C9.29821 15.1148 9.24984 14.8709 9.25 14.6245V11.4995C9.25 11.3338 9.18415 11.1748 9.06694 11.0576C8.94973 10.9404 8.79076 10.8745 8.625 10.8745H7.375C7.20924 10.8745 7.05027 10.9404 6.93306 11.0576C6.81585 11.1748 6.75 11.3338 6.75 11.4995V14.6245C6.75 15.1218 6.55246 15.5987 6.20083 15.9504C5.84919 16.302 5.37228 16.4995 4.875 16.4995H2.375C1.87772 16.4995 1.40081 16.302 1.04917 15.9504C0.697544 15.5987 0.5 15.1218 0.5 14.6245V7.66203C0.5 7.14703 0.7125 6.65328 1.0875 6.29953L7.14125 0.57703ZM8 1.48453L1.945 7.20953C1.88353 7.2678 1.83455 7.33797 1.80103 7.41575C1.76751 7.49354 1.75014 7.57733 1.75 7.66203V14.6245C1.75 14.7903 1.81585 14.9493 1.93306 15.0665C2.05027 15.1837 2.20924 15.2495 2.375 15.2495H4.875C5.04076 15.2495 5.19973 15.1837 5.31694 15.0665C5.43415 14.9493 5.5 14.7903 5.5 14.6245V11.4995C5.5 11.0022 5.69754 10.5253 6.04917 10.1737C6.40081 9.82207 6.87772 9.62453 7.375 9.62453H8.625C9.12228 9.62453 9.59919 9.82207 9.95083 10.1737C10.3025 10.5253 10.5 11.0022 10.5 11.4995V14.6245C10.5 14.7903 10.5658 14.9493 10.6831 15.0665C10.8003 15.1837 10.9592 15.2495 11.125 15.2495H13.625C13.7908 15.2495 13.9497 15.1837 14.0669 15.0665C14.1842 14.9493 14.25 14.7903 14.25 14.6245V7.66203C14.25 7.57712 14.2327 7.49309 14.1992 7.41508C14.1657 7.33706 14.1166 7.2667 14.055 7.20828L8 1.48453Z" fill="#232674"/>
</svg>
Home</button>
      <div class="dropdown">
  <button class="btn  dropdown-toggle"  type="button" data-bs-toggle="dropdown" aria-expanded="false" id='leads' onClick={handleLeads}>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.87422 15.5C5.9399 15.5494 6.01468 15.5853 6.09426 15.6057C6.17385 15.6262 6.25669 15.6307 6.33803 15.6191C6.41937 15.6075 6.49763 15.58 6.56832 15.5381C6.63901 15.4962 6.70075 15.4408 6.75 15.375C7.12841 14.8705 7.61909 14.4609 8.1832 14.1789C8.7473 13.8968 9.36932 13.75 10 13.75C10.6307 13.75 11.2527 13.8968 11.8168 14.1789C12.3809 14.4609 12.8716 14.8705 13.25 15.375C13.2992 15.4407 13.3609 15.496 13.4316 15.5378C13.5022 15.5796 13.5804 15.6071 13.6616 15.6187C13.7429 15.6303 13.8256 15.6258 13.9051 15.6054C13.9846 15.5851 14.0593 15.5492 14.125 15.5C14.1907 15.4508 14.246 15.3891 14.2878 15.3184C14.3296 15.2478 14.3571 15.1696 14.3687 15.0884C14.3803 15.0071 14.3758 14.9244 14.3554 14.8449C14.3351 14.7654 14.2992 14.6907 14.25 14.625C13.6966 13.883 12.9586 13.2988 12.1094 12.9305C12.5748 12.5056 12.9008 11.9499 13.0447 11.3364C13.1887 10.7229 13.1438 10.0802 12.9159 9.49267C12.688 8.90514 12.2879 8.40023 11.7679 8.0442C11.248 7.68816 10.6325 7.49765 10.0023 7.49765C9.37218 7.49765 8.75673 7.68816 8.23678 8.0442C7.71682 8.40023 7.31666 8.90514 7.08879 9.49267C6.86093 10.0802 6.81602 10.7229 6.95995 11.3364C7.10388 11.9499 7.42993 12.5056 7.89531 12.9305C7.0444 13.2981 6.30472 13.8824 5.75 14.625C5.65046 14.7575 5.60763 14.9241 5.63092 15.0882C5.65422 15.2523 5.74173 15.4004 5.87422 15.5ZM10 8.75C10.3708 8.75 10.7334 8.85997 11.0417 9.06599C11.35 9.27202 11.5904 9.56486 11.7323 9.90747C11.8742 10.2501 11.9113 10.6271 11.839 10.9908C11.7666 11.3545 11.588 11.6886 11.3258 11.9508C11.0636 12.213 10.7295 12.3916 10.3658 12.464C10.0021 12.5363 9.62508 12.4992 9.28247 12.3573C8.93986 12.2154 8.64702 11.975 8.44099 11.6667C8.23497 11.3584 8.125 10.9958 8.125 10.625C8.125 10.1277 8.32254 9.65081 8.67417 9.29917C9.02581 8.94754 9.50272 8.75 10 8.75ZM15.625 1.875H4.375C4.04348 1.875 3.72554 2.0067 3.49112 2.24112C3.2567 2.47554 3.125 2.79348 3.125 3.125V16.875C3.125 17.2065 3.2567 17.5245 3.49112 17.7589C3.72554 17.9933 4.04348 18.125 4.375 18.125H15.625C15.9565 18.125 16.2745 17.9933 16.5089 17.7589C16.7433 17.5245 16.875 17.2065 16.875 16.875V3.125C16.875 2.79348 16.7433 2.47554 16.5089 2.24112C16.2745 2.0067 15.9565 1.875 15.625 1.875ZM15.625 16.875H4.375V3.125H15.625V16.875ZM6.875 5C6.875 4.83424 6.94085 4.67527 7.05806 4.55806C7.17527 4.44085 7.33424 4.375 7.5 4.375H12.5C12.6658 4.375 12.8247 4.44085 12.9419 4.55806C13.0592 4.67527 13.125 4.83424 13.125 5C13.125 5.16576 13.0592 5.32473 12.9419 5.44194C12.8247 5.55915 12.6658 5.625 12.5 5.625H7.5C7.33424 5.625 7.17527 5.55915 7.05806 5.44194C6.94085 5.32473 6.875 5.16576 6.875 5Z" fill="#1C1C1C"/>
</svg>

Your Leads
  </button>
  

  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" href="#">Accepted</Link></li>
    <li><Link class="dropdown-item" href="#">Rejected</Link></li>
    <li><Link class="dropdown-item" href="#">Closed</Link></li>
    <li><Link class="dropdown-item" href="#">Follow Up</Link></li>
    <li><Link class="dropdown-item" href="#">Not Interested</Link></li>
    <li><Link class="dropdown-item" href="#">Not Connected</Link></li>
    <li><Link class="dropdown-item" href="#">Callback</Link></li>
    <li><Link class="dropdown-item" href="#">Language Barrier</Link></li>

  </ul>
</div> 
       </div>
        </div>
        <div className='things'>
       <div className='content'>
            <h1>Welcome</h1>
            <div className='info'>
<img  src={img} alt='.img' className='logo'/>

Rocket Singh 
<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.57946 7.85866C6.21487 7.85866 5.9266 8.14199 5.9266 8.50033C5.9266 8.85033 6.21487 9.14199 6.57946 9.14199H11.6667V13.1253C11.6667 15.167 9.97941 16.8337 7.89365 16.8337H3.76453C1.68726 16.8337 0 15.1753 0 13.1337V3.87533C0 1.82533 1.69574 0.166992 3.77301 0.166992H7.91061C9.97941 0.166992 11.6667 1.82533 11.6667 3.86699V7.85866H6.57946ZM14.6919 5.61716L17.1252 8.04216C17.2502 8.16716 17.3169 8.3255 17.3169 8.5005C17.3169 8.66716 17.2502 8.83383 17.1252 8.9505L14.6919 11.3755C14.5669 11.5005 14.4002 11.5672 14.2419 11.5672C14.0752 11.5672 13.9085 11.5005 13.7835 11.3755C13.5335 11.1255 13.5335 10.7172 13.7835 10.4672L15.1169 9.14216H11.6669V7.85883H15.1169L13.7835 6.53383C13.5335 6.28383 13.5335 5.8755 13.7835 5.6255C14.0335 5.36716 14.4419 5.36716 14.6919 5.61716Z" fill="#030229"/>
</g>
</svg>
 </div>
        </div>
        <div className='leads'>
         <div className='hide'>

         <div className='total-lead'>
        

<div class="card text-bg-light mb-3 cards" >
  <div class="card-body">
    <h4 class="card-title">Total Leads <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z" fill="#1E1E1E"/>
</svg>
</h4>
    <h2 class="card-title">1001</h2>
</div>

</div>
<button  class="button-total-lead">Create New Lead <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33329 8H12.6666" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99996 12.6663L12.6666 7.99967L7.99996 3.33301" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
 </div>
    <div className='lead-Stats'>
                <h5>Lead Stats</h5>
                <div className='leads'>
                <div className='lead'>

               < div class="card text-bg-danger mb-3 cards" >
  <div class="card-body">
    <h6 class="card-title">Not Connected <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z" fill="#1E1E1E"/>
</svg>
</h6>
    <h2 class="card-title">{data.categories_count.accepted}</h2>
</div>

</div>
<div class="card text-bg-success mb-3 cards" >
  <div class="card-body">
    <h6 class="card-title">CallBack <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z" fill="#1E1E1E"/>
</svg>
</h6>
    <h2 class="card-title">{data.categories_count.callback}</h2>
</div>

</div>
< div class="card text-bg-danger mb-3 cards" >
  <div class="card-body">
    <h6 class="card-title">Rejected <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z" fill="#1E1E1E"/>
</svg>
</h6>
    <h2 class="card-title">{data.categories_count.rejected}</h2>
</div>

</div>
< div class="card text-bg-danger mb-3 cards" >
  <div class="card-body">
    <h6 class="card-title">Not Interested <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z" fill="#1E1E1E"/>
</svg>
</h6>
    <h2 class="card-title">{data.categories_count.not_interested}</h2>
</div>

</div>
< div class="card text-bg-success mb-3 cards" >
  <div class="card-body">
    <h6 class="card-title">Follow Up <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z" fill="#1E1E1E"/>
</svg>
</h6>
    <h2 class="card-title">{data.categories_count.follow_up}</h2>
</div>

</div>
< div class="card text-bg-danger mb-3 cards" >
  <div class="card-body">
    <h6 class="card-title">Language Barrier <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z" fill="#1E1E1E"/>
</svg>
</h6>
    <h2 class="card-title"></h2>
</div>

</div>

    </div>
      </div>
        </div>
         </div>
             <div >
                 <Table/>
             </div>
        </div>
        
        </div>

    </div>
  )
}

export default Home