import {redirect} from "next/navigation";
import '@/app/globals.css'

export default function NotFound() {
  redirect('/404')
}