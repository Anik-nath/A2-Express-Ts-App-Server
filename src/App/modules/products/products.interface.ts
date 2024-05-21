//1. make product interface 
export type Variant = {
    type:string,
    value:string
}
export type Inventory = {
    quantity:number,
    inStock:boolean
}
export type Iproduct = {
name:string,
description:string,
price: number,
category:string,
tags:string[],
variants: Variant[],
inventory: Inventory,
}
