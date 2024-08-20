import React from 'react'

export default function Page({ params }: { params: { name: string } }) {
    console.log(params.name)
  return <h1 className=''>{params.name}</h1>;
}

