import groovy.json.JsonSlurper

def jsonSlurper = new JsonSlurper()

def object = jsonSlurper.parseText('[{"name":"DI: ACME CORP"}]')

return object