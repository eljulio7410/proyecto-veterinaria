package com.example.demo.service;

import com.example.demo.entity.Mascota;

import java.util.List;

public interface MascotaService {
    public Mascota crearmascota(Mascota mascota);
    public List<Mascota> lmascotas();
    public void eliminarMascota(Long id);


}
