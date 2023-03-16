module.exports = (uri,year)=>{
    
    const data = require('../dist')
    const result =  data['nvdcve-1.1-'+year].CVE_Items.filter((item)=>{

        let nodes = item.configurations.nodes        
        let flag = false
        
        for(let i=0; i<nodes.length;i++){
        
            let cpe_match = nodes[i].cpe_match 

            for(let j=0;j<cpe_match.length;j++){
                if(cpe_match[j].cpe23Uri===uri){
                    flag=true
                }
            }
        }
        return flag
    })
    
    const metaData = result.map((item)=>{
        return item.cve.CVE_data_meta.ID
    }) 
    return metaData
}