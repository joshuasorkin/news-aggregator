class RequestParser {}
    parse(req){
        const keywords = req.query.keywords;
        const companies = req.query.companies;
        let errors = [];
        if (!keywords) {
            errors.push("Missing 'keywords' parameter.");
        }
        if (!companies) {
            errors.push("Missing 'companies' parameter.");
        }
        //todo: confirm that keywords and companies are both arrays
        if (errors.length === 0){
            requests = {
                keywords:keywords,
                companies:companies,
            }
            return requests;
        }   
        else{
            requests = {
                errors:errors
            }

        }
    }
}