// Pick the servers with status: true and http in their services
// Extract only the port, services (without 'http' in it) and status 
const servers = {
    'SERVER-1': {
        host: 'dummy-host1',
        port: 4522,
        os: 'linux',
        services: ['http', 'ssh', 'mysql'],
        status: true
    },
    'SERVER-2': {
        host: 'dummy-host2',
        port: 7522,
        os: 'linux',
        services: ['http', 'ssh', 'mysql'],
        status: false
    },
    'SERVER-3': {
        host: 'dummy-host3',
        port: 7422,
        os: 'linux',
        services: ['ssh', 'mysql', 'ws'],
        status: true
    },
    'SERVER-4': {
        host: 'dummy-host4',
        port: 9223,
        os: 'linux',
        services: ['http', 'ssh', 'mysql'],
        status: false
    },
}

function getOnlineServers(servers) {
    // return Object.entries(servers)
    //     .filter(([name, data]) => data.status && data.services.includes('http'))
    //     .map(([name, data]) => {
    //         return {
    //             services: data.services.filter(service => service !== 'http'),
    //             status: true,
    //             port: data.port
    //         }
    //     });

    const reduced = Object.entries(servers).reduce((filtered, server) => {
        if (server[1].status && server[1].services.includes('http')) {
            filtered[server[0]] = {
                status: true,
                port: server[1].port,
                services: server[1].services.filter(service => service !== 'http')
            }
        }
        return filtered
    }, [])
    
    return Object.assign({}, reduced)
}

const result = getOnlineServers(servers)
console.log(result)