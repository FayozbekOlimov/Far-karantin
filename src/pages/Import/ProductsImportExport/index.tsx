import React from 'react'
import statisticsConsideredData from "../../statisticsConsideredData.json";

function ProductsImportExport() {
  return (
    <div className="product_import_export page_card">
      <h4 className="page_title">
        O‘zbekiston Respublikasiga olib kiriladigan va uning tashqarisiga olib chiqiladigan o‘simliklar karantini nazoratidagi mahsulotlar ro‘yxati
      </h4>
      <div className="product_import_export_body">
        {
          Object.entries(statisticsConsideredData).map(([id, { title, link }]) => (
            <a
              className='statistic_link'
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          )
          )
        }
      </div>
    </div>
  )
}

export default ProductsImportExport