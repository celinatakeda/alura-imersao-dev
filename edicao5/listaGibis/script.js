var listaGibis = [
  "https://1.bp.blogspot.com/-AMeh-9Lb7cQ/Ws4MxDNUVZI/AAAAAAADY_4/ErVYc4vfpjwxtb84ouopMxsukh6xrEFZQCLcBGAs/s1600/DESMANIPULADOR053-20180411-100252CAPA%2BDE%2BGIBI%2BCOVERS%2BCOMICS.jpg",
  "https://1.bp.blogspot.com/-ljSeG7JKtMo/WlDrUgugR_I/AAAAAAADJC4/-gNUiNxhA5YS7idSVd458B6kEJ-wj27KgCLcBGAs/s1600/DESMANIPULADOR060-20180104-213223CAPAS%2BDE%2BGIBI%2B%2BCOVERS%2BCOMICS.jpg", 
"https://4.bp.blogspot.com/-pqicxYYS_BA/WnT3--qX8hI/AAAAAAADQgw/TBuZvv7DJVAPWWkCtsKb1M3OBZSYpKTqACLcBGAs/s1600/DESMANIPULADOR025-20180202-211312CAPAS%2BDE%2BGIBI%2BCOVERS%2BCOMICS.jpg"
];

listaGibis.push("https://i.pinimg.com/236x/c3/d3/0d/c3d30d6a91e8143796bd018b2d4cb91c--book-covers-material.jpg?nii=t")

listaGibis.push("https://th.bing.com/th/id/R.1d7263d3d131032ddb65b109b0dfd8b0?rik=p08hNuf09HfORg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-YYKJBqh_rMo%2fUGzGaq6Z47I%2fAAAAAAAAWmM%2fEM0WgpA5sIs%2fs1600%2fCCPANINI070_605x858.jpg&ehk=8TEg5KefxqKxja5gPEgaAUBi1jpKUNtyIWqEMaWDx%2bI%3d&risl=&pid=ImgRaw&r=0")

listaGibis.forEach((gibis) => {
  document.write("<img src=" + gibis + ">");
})

document.write("<p>" + "<strong>" +  "Gibis na Biblioteca Virtual!" + "</strong>" + "</p>" + "<br>");
