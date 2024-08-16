import{j as t}from"./index-DHNyHi_v.js";import{g as m,u as h,D as p}from"./index-BGCPCozT.js";import{j as g,n}from"./Typography-BX9MtGAQ.js";import{G as a}from"./Grid-CIIn-vYA.js";import"./IconButton-D-C0Z5ve.js";const w=i=>({root:{padding:"4% 10%",justifyContent:"center",alignItems:"center"},title:{color:i.palette.secondary.main,fontSize:"2rem",[i.breakpoints.down("md")]:{fontSize:"1.5rem"}},subtitle:{color:i.palette.primary.main}}),x=m`
    query getAllProjects{
        projects{
            data{
                attributes{
                        title,
                        url
                }
            }
        }
    }
`;m`
    query getProjectById($id: ID!){
        projects(id: $id){
            data{
                attributes{
                    title,
                    url
                }
            }
        }
    }
`;const y=[{title:"Guardian Group",url:"https://www.myguardiangroup.com/"},{title:"Poker Planner - Azure Extension",url:"https://marketplace.visualstudio.com/items?itemName=EstimationPoker.estimate"},{title:"Tror, GEN AI",url:"https://tror.ai/"},{title:"IWT E-Ticketing",url:"https://www.asiwt.in/"},{title:"Assam Inland Water Transport Authority",url:"https://aiwtra.in/"},{title:"Assam State Transport Corporation",url:"https://www.myguardiangroup.com/"}],d=[{title:"Above & Beyond",url:"https://www.linkedin.com/in/bidyut-talukdar/details/honors/",description:"",date:"30/12/2023"},{title:"Recognizing Team Excellence",url:"https://express.tezo.com/2024/may",description:"Celebrating the Dedication and Effort of Our Outstanding Team",date:"04/05/2024"},{title:"Hack for health - Hackathon, IIT Guwahati",url:"https://www.linkedin.com/in/bidyut-talukdar/details/honors/",description:"During the event, My team had been worked for program to give the efficient search of any kind of medical institutions such as Medical, Pharmacy, Clinic, etc on Google Map API",date:"01/01/2019"},{title:"Winner at Code Fest'18, organised by T&P Cell, GUIST in Association with Beyond Pvt. Ltd",url:"https://www.linkedin.com/in/bidyut-talukdar/details/honors/",description:"In Code Fest organized by Training and Placement Cell in Association with Beyond Consultancy Services, we participate as a team 'Uddeshya' and work on reverse logistic problem statement and developed an android app.",date:"15/09/2018"}],T=()=>{var c,u;const i=g(),r=w(i),s=h(x),o=((u=(c=s==null?void 0:s.data)==null?void 0:c.projects)==null?void 0:u.data.map(e=>e.attributes))||y;return t.jsx(t.Fragment,{children:t.jsxs(a,{container:!0,spacing:2,sx:r.root,children:[t.jsxs(a,{item:!0,xs:12,children:[t.jsx(n,{sx:r.title,align:"left",children:"/Works..."}),t.jsx(n,{variant:"subtitle1",sx:r.subtitle,align:"left",children:"Selected work I've taken on in the past."})]}),o&&o.length>0&&o.map((e,l)=>t.jsx(a,{item:!0,xs:12,lg:6,children:t.jsx(p,{title:e.title,link:e.url,description:"",imagePath:"",dateString:""})},l)),t.jsxs(a,{item:!0,xs:12,children:[t.jsx(n,{sx:r.title,mt:2,align:"left",children:"/Appreciation ..."}),t.jsx(n,{variant:"subtitle1",sx:r.subtitle,align:"left",children:"Heartfelt Thanks"})]}),d&&d.length>0&&d.map((e,l)=>t.jsx(a,{item:!0,xs:12,lg:6,children:t.jsx(p,{title:e.title,link:e.url,description:e.description,imagePath:"",dateString:e.date})},l))]})})};export{T as default};
