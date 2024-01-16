import React from 'react'
import styled from 'styled-components'
import { launchBulkTissueViolinPlot } from 'gtex-d3/src/GeneExpressionViolinPlot'
import 'gtex-d3/css/violin.css'

import GtexLauncher, { GTEX_HOST } from './GtexLauncher'

const GtexContainer = styled.div`
  #gene-expression-plot-toolbar {
    margin-left: 100px;
    margin-top: 20px;
      
    .gene-expression-plot-option-label {
      padding-right: 5px;
      font-size: 15px;
      font-variant: all-small-caps;
      font-weight: 500;
    }
    
    .col-lg-1 {
        display: none !important;
    }
    .col-lg-2 {
        width: 20%;
        float: left;
    }
    .col-lg-11 {
        width: 100%;
    }
    
    .btn-group {
      display: inline-block;
      vertical-align: middle;
      
      .btn {
        padding: 5px 10px;
        font-size: 12px;
        line-height: 1.5;
        border-radius: 3px;
        cursor: pointer;
        user-select: none;
        border: 1px solid #ccc;
          
        &:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
          
        &:last-child {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
          
        &.active, &:active,  &:focus, &:hover {
          background-color: #e6e6e6;
          border-color: #adadad;
          box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
        }
          
        &+.btn {
          margin-left: -1px;
        }
      }
    }
    
    .fa {
      font-family: 'Icons';
      font-style: normal;
      
      &.fa-caret-up:before {
        content: "\\f0d8";
      }
      &.fa-caret-down:before {
        content: "\\f0d7";
      } 
    }
  }
  
  #gene-expression-plot-svg {
    .violin-x-axis, .violin-y-axis {
      line, path {
        stroke: Black;
      }
    }
    
    .violin-x-axis text, .violin-y-axis text, text.violin-axis-label {
      fill: Black;
      font-size: 11.5px;
      font-weight: 500;
    }
  }
`

const MARGINS = {
  top: 10,
  right: 50,
  bottom: 150,
  left: 50,
}
const DIMENSIONS = {
  w: window.innerWidth * 0.8,
  h: 400,
}

const URLS = {
  geneExp: `${GTEX_HOST}expression/geneExpression?gencodeId=`,
  tissue: `${GTEX_HOST}dataset/tissueSiteDetail`,
}

const GTEX_CONTAINER_ID = 'gene-expression-plot'

const launchGtex = (gencodeId) => {
  launchBulkTissueViolinPlot(GTEX_CONTAINER_ID, `${GTEX_CONTAINER_ID}-tooltip`, gencodeId, '', URLS, MARGINS, DIMENSIONS)
}

export default props => (
  <GtexContainer>
    <GtexLauncher containerId={GTEX_CONTAINER_ID} launchGtex={launchGtex} {...props} />
  </GtexContainer>
)
