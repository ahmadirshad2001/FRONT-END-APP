import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import './DataViewDemo.css';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Column } from 'primereact/column';
import { card } from "react-bootstrap";
import Meezan from './Meezan.png';
import EasyPaisa from './EasyPaisa.png';
import JazzCash from './JazzCash.png';




const DataViewDemo = (props) => {
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'activity': { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState(null);



    useEffect(() => {
        if (props.openModal) {
            getUsers()
            setOpen(true)
        }

    }, [props.openModal]);

    const getUsers = async () => {
        var response = await axios.get(`http://localhost:5000/api/users/`);
        var filteredDt = []
        if (props.loggedIn?.Type == "needy") {
            filteredDt = response.data.filter(x => x.Type == "doner")
        }
        else {
            filteredDt = response.data.filter(x => x.Type == "needy")
        }

        setProducts(filteredDt)
    }


    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const header = renderHeader();

    const closeDialog = () => {

        setOpen(false)
        props.closeModal()
    }
    return (

        <div className="dataview-demo2">
             <Dialog onHide={() => closeDialog()} visible={open} style={{ width: '90vw' }} >
                <DataTable value={products} paginator className="p-datatable-customers" header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10, 25, 50]}
                    dataKey="id" rowHover
                    filters={filters} filterDisplay="menu" responsiveLayout="scroll"
                    globalFilterFields={['name']} emptyMessage="No Data found."
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">


                    <Column field="name" header="Name" sortable style={{ minWidth: '8rem' }} />
                    <Column field="email" header="Email" sortable style={{ minWidth: '8rem' }} />
                   
                    <Column field="Country" header="Country" sortable style={{ minWidth: '8rem' }} />
                    <Column field="City" header="City" sortable style={{ minWidth: '8rem' }} />
                    <Column field="TotalNeeds" header="TotalNeeds" sortable style={{ minWidth: '8rem' }} />

                    <Column field="Address" header="Address" sortable style={{ minWidth: '8rem' }} />
                    <Column field="WhatYouWant" header="Comment" sortable style={{ minWidth: '8rem' }} />
                    

                </DataTable>
            </Dialog> 
        </div>
    );
}

export default DataViewDemo;