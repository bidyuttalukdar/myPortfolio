import{j as t}from"./index-hHRrND1D.js";import{g as d,u as m,D as p}from"./index-CeaBBt6c.js";import{j as g,n as c}from"./Typography-C70rRNy2.js";import{G as o}from"./Grid--59dfcA0.js";import"./IconButton-9uULuG_p.js";const h=d`
    query getBlogPost {
        posts{
            data{
                attributes{
                    title,
                    url
                }
            }
        }
    }
`;d`
    query getPost($id: ID!){
        posts(id: $id){
            data{
                attributes{
                    title,
                    url
                }
            }
        }
    }
`;const x=s=>({root:{padding:"4% 10%",justifyContent:"center",alignItems:"center",width:"100%"},title:{color:s.palette.secondary.main},subtitle:{color:s.palette.primary.main}}),j=[{title:"Unlocking the Power of Concurrent Rendering and More with hashtag#React",url:"https://www.linkedin.com/posts/activity-7133499540111839232-9VWg?utm_source=share&utm_medium=member_desktop",date:"04/01/2024"}],k=()=>{var n,l;const s=g(),r=x(s),i=m(h),a=((l=(n=i==null?void 0:i.data)==null?void 0:n.projects)==null?void 0:l.data.map(e=>e.attributes))||j;return t.jsx(t.Fragment,{children:t.jsxs(o,{container:!0,spacing:2,sx:r.root,children:[t.jsxs(o,{item:!0,xs:12,children:[t.jsx(c,{variant:"h4",sx:r.title,align:"center",children:"/Posts..."}),t.jsx(c,{variant:"subtitle1",sx:r.subtitle,align:"center",children:"Some of my selected post, I've wrote in the past."})]}),a&&a.length>0&&a.map((e,u)=>t.jsx(o,{item:!0,xs:12,lg:6,children:t.jsx(p,{title:e.title,link:e.url,description:"",imagePath:"",dateString:e.date})},u))]})})};export{k as default};
