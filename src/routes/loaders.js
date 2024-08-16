import { lazy } from "react";

export const Layout =  lazy(()=>import('../pages/layout'));
export const Home =  lazy(()=>import('../pages/home'));
export const WorkPage =  lazy(()=>import('../pages/works'));
export const BlogPage =  lazy(()=>import('../pages/blogs'));
