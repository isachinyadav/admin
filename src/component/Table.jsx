import React from 'react'
import  "./table.css";
const Table = () => {
  return (
    <div className='table'>
    <h5>Your Leads</h5>
    <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>
    
    <table class="table table-bordered table-hover">
  <thead class="table-light">
    <tr>
      <th scope="col">s.no</th>
      <th scope="col">Property Name</th>
      <th scope="col">URL</th>
      <th scope="col">Description</th>
      <th scope="col">Email Address</th>
      <th scope="col">Description</th>
      <th scope="col">Country</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Status</th>
       <th scope="col">Date</th>
      <th scope="col">Action</th>
     </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td> <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.16663 3.66699H2.49996C2.14634 3.66699 1.8072 3.80747 1.55715 4.05752C1.3071 4.30756 1.16663 4.6467 1.16663 5.00033V11.0003C1.16663 11.3539 1.3071 11.6931 1.55715 11.9431C1.8072 12.1932 2.14634 12.3337 2.49996 12.3337H8.49996C8.85358 12.3337 9.19272 12.1932 9.44277 11.9431C9.69282 11.6931 9.83329 11.3539 9.83329 11.0003V10.3337" stroke="#E87B25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.16667 2.3334L11.1667 4.3334M12.09 3.39007C12.3526 3.12751 12.5001 2.77139 12.5001 2.40007C12.5001 2.02875 12.3526 1.67264 12.09 1.41007C11.8274 1.14751 11.4713 1 11.1 1C10.7287 1 10.3726 1.14751 10.11 1.41007L4.5 7.00007V9.00007H6.5L12.09 3.39007Z" stroke="#E87B25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
edit <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.16663 12C1.79996 12 1.48618 11.8696 1.22529 11.6087C0.964404 11.3478 0.833737 11.0338 0.833293 10.6667V2H0.166626V0.666667H3.49996V0H7.49996V0.666667H10.8333V2H10.1666V10.6667C10.1666 11.0333 10.0362 11.3473 9.77529 11.6087C9.5144 11.87 9.2004 12.0004 8.83329 12H2.16663ZM8.83329 2H2.16663V10.6667H8.83329V2ZM3.49996 9.33333H4.83329V3.33333H3.49996V9.33333ZM6.16663 9.33333H7.49996V3.33333H6.16663V9.33333Z" fill="#9C0F0F"/>
</svg>
delete</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td>edit delete</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td>edit delete</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td>edit delete</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td>edit delete</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td>edit delete</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td>edit delete</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td>edit delete</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td>edit delete</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td>edit delete</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td>edit delete</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td>edit delete</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>AJ Sharma</td>
      <td>Raddison hotel</td>
      <td>www.raddisonblue.com</td>
      <td>LOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmmLOrem impusmm</td>
      <td>Voyagerstales@gmail.com</td>
      <td>India</td>
      <td>98736352</td>
      <td><div className='accepted'>Accepted</div></td>
      <td>02-12-2023</td>
      <td>edit delete</td>
    </tr>
  </tbody>
</table>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Table