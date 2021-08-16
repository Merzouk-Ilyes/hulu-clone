import Image from 'next/image'
import HeaderItem from "./headerItem"
import {
    BadgeCheckIcon ,CollectionIcon ,LightningBoltIcon ,HomeIcon ,SearchIcon ,UserIcon
} from "@heroicons/react/solid"
function header() {
    return ( 
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto" >
           <div className="flex flex-grow justify-evenly max-w-2xl" >
               <HeaderItem  title="HOME" Icon={HomeIcon} />
               <HeaderItem  title="TRENDING" Icon={LightningBoltIcon} />
               <HeaderItem  title="VERIFIED" Icon={BadgeCheckIcon} />
               <HeaderItem  title="COLLECTIONS" Icon={CollectionIcon} />
               <HeaderItem  title="SEARCH" Icon={SearchIcon} />
               <HeaderItem  title="ACCOUNT" Icon={UserIcon} />
           </div>
            <Image 
            className="object-contain"    
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hulu_logo_2017.svg/1200px-Hulu_logo_2017.svg.png"
              height={100} width={200}  />
        </header>
    )
}

export default header
