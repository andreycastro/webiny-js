import React from "react";
import Element from "@webiny/app-page-builder/editor/components/Element";
import { PbElement } from "@webiny/app-page-builder/types";

type DocumentProps = { element: PbElement };

const Document = ({ element }: DocumentProps) => {
    return (
        <div className={"webiny-pb-page-document"} data-testid={"pb-editor-page-canvas-section"}>
            {element.elements.map(el => (
                <Element key={el} id={el} />
            ))}
        </div>
    );
};

export default React.memo(Document);
