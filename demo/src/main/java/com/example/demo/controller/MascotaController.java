package com.example.demo.controller;

import com.example.demo.dao.MascotaDao;
import com.example.demo.entity.Mascota;
import com.example.demo.service.MascotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mascoteca")
public class MascotaController {

    @Autowired
    public MascotaService serv;

    @PostMapping("/crear")
    public Mascota crearMascota(@RequestBody Mascota mascota){

        return serv.crearmascota(mascota);

    }


}
