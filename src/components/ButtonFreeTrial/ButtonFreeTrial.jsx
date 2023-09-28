import { useState } from 'react';

export default function ButtonFreeTrial({bgColor, textColor}) {
// aca hay que pasarle los estilos por props o state o como sea
// naranja: [#DA581A]

    return (
        <button
        type="button"
        className={`rounded-full bg-${bgColor} px-4 py-2.5 text-sm font-semibold text-${textColor} shadow-sm hover:bg-[#DA581A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DA581A]`}
      >
        Start Free Trial
      </button>
    )
}
