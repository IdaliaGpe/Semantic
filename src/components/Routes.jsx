import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from './ProductList';
import Product from './Product';
import HomeVieew from './HomeView';
import AddProduct from "./AddProduct";
import ProductGroupList from "./ProductGroupList";
import AddProductGroup from './AddProductGroup';

export default class Routes extends Component{

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/product' component={Product}/>
                    <Route path='/products' component={ProductList}/>
                    <Route path='/addproduct' component={AddProduct}/>
                    <Route path='/groups' component={ProductGroupList}/>
                    <Route path='/addproductgroup' component={AddProductGroup}/>
                    <Route path='/' component={HomeVieew}/>

                </Switch>
            </BrowserRouter>
        );
    }
}