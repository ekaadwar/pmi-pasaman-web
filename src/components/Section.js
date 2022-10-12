import React from 'react'
import { AuthHeader } from './AuthHeader'

export const AuthSection = ({ content = <div />, signup = false }) => {
  return (
    <section className="flex-1 auth-page h-full pt-20">
      <AuthHeader signup={signup} />
      {content}
    </section>
  )
}

export const PageJumbotron = ({ content = <div /> }) => {
  return (
    <section className="jumbotron min-height h-screen pt-20">{content}</section>
  )
}

export const PageSection = ({ content = <div /> }) => {
  return <section className="min-height h-screen pt-20">{content}</section>
}
