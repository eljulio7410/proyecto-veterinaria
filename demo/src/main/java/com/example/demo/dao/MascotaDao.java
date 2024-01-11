package com.example.demo.dao;

import com.example.demo.entity.Mascota;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MascotaDao extends JpaRepository <Mascota,Long> {


}
