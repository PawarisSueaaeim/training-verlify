export const agentId = (data) => {
    return data.map(agent => agent.agent_id);
};

export const filterData = (selectedAgent, data) => {
    // Create a set of agent names for quick lookup
    const agentNames = new Set(selectedAgent.map(agent => agent.agent_name));
    
    // Filter the data based on the agent names
    return data.map(day => {
        const filteredAffiliates = day.affiliatess.filter(affiliate => agentNames.has(affiliate.name));
        return {
            ...day,
            affiliatess: filteredAffiliates
        };
    });
}
  
