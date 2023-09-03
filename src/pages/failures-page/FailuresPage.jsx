import React from "react";
import {AccordionItem} from "../../components/accordionItem/AccordionItem";
import companies from "../../../public/companies.json";

function FailuresPage() {
    return (
        <div>
            <h2>
                Отказы
            </h2>
            {
                companies.map(company => (
                    <AccordionItem
                        key = {company.companyName} //TODO: Прикрутить id
                        company = {company}
                    />
                ))

            }
        </div>
    );
}

export {FailuresPage};