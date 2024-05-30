import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge"
import { LucideCircleEllipsis } from "lucide-react";

type HeaderData = {
  title: string;
  classProps: string;
}

type CellData = {
  name: string;
  status: string;
  price: string;
  totalSales: number;
  createdAt: string;
  actions: string;
}

const headerData: HeaderData[] = [{
  title: 'Name',
  classProps: ""
}, {
  title: 'Status',
  classProps: ""
}, {
  title: 'Price',
  classProps: ""
}, {
  title: 'Total Sales',
  classProps: "hidden md:table-cell"
}, {
  title: 'Created at',
  classProps: "hidden md:table-cell"
}, {
  title: 'Actions',
  classProps: ""
}];

const cellData: CellData[] = [
  {
    "name": "Laser Lemonade Machine",
    "status": "Draft",
    "price": "$499.99",
    "totalSales": 25,
    "createdAt": "2023-07-12 10:42 AM",
    "actions": ""
  },
  {
    "name": "Solar Smoothie Maker",
    "status": "Active",
    "price": "$349.99",
    "totalSales": 50,
    "createdAt": "2023-09-05 02:15 PM",
    "actions": ""
  },
  {
    "name": "Glowing Grapefruit Juicer",
    "status": "Inactive",
    "price": "$199.99",
    "totalSales": 10,
    "createdAt": "2023-11-20 08:03 AM",
    "actions": ""
  },
  {
    "name": "Citrus Slicer 3000",
    "status": "Active",
    "price": "$159.99",
    "totalSales": 75,
    "createdAt": "2023-12-10 04:30 PM",
    "actions": ""
  },
  {
    "name": "Tropical Twist Mixer",
    "status": "Draft",
    "price": "$299.99",
    "totalSales": 15,
    "createdAt": "2024-02-18 11:20 AM",
    "actions": ""
  },
    {
      "name": "Electric Lime Squeezer",
      "status": "Active",
      "price": "$129.99",
      "totalSales": 40,
      "createdAt": "2024-03-15 09:55 AM",
      "actions": ""
    },
    {
      "name": "Citrus Zest Extractor",
      "status": "Inactive",
      "price": "$79.99",
      "totalSales": 5,
      "createdAt": "2024-04-02 01:10 PM",
      "actions": ""
    },
    {
      "name": "Tangy Tangerine Press",
      "status": "Draft",
      "price": "$249.99",
      "totalSales": 0,
      "createdAt": "2024-04-18 03:45 PM",
      "actions": ""
    },
    {
      "name": "Melon Medley Blender",
      "status": "Active",
      "price": "$199.99",
      "totalSales": 20,
      "createdAt": "2024-05-05 10:20 AM",
      "actions": ""
    },
    {
      "name": "Berry Blast Juicer",
      "status": "Draft",
      "price": "$299.99",
      "totalSales": 8,
      "createdAt": "2024-05-22 12:30 PM",
      "actions": ""
    }
  
];


const ApexGridComponent = () => {

  return (
    <Table>
      <TableHeader className='bg-light-gray'>
        <TableRow>
          {headerData.map((data, index) => (
            <TableHead key={index} className={data.classProps}>
              {data.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {cellData.map((data, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              {data.name}
            </TableCell>
            <TableCell>
              <Badge 
                variant="outline" 
                className={data.status === 'Active' ? 'bg-green-400' : 'bg-orange-300'}>{data.status}</Badge>
            </TableCell>
            <TableCell>{data.price}</TableCell>
            <TableCell className="hidden md:table-cell">
              {data.totalSales}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {data.createdAt}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <LucideCircleEllipsis className="w-5 h-5 text-muted-foreground/70" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>)
        )}
      </TableBody>
    </Table>
  )
}

export default ApexGridComponent